import {ALGORITHM_VERSION, ELEMENT_COEFFICIENTS, RHYTHM_COEFFICIENTS, RHYTHM_PRIMARY_DIMENSION, RHYTHM_SECONDARY_DIMENSION} from './config';
import {QUESTION_IDS, QUESTIONS, QUESTION_SET_VERSION} from './questions';
import {ARCHETYPE_CODES, DIMENSION_KEYS, ELEMENT_KEYS, RHYTHM_CODES, type ArchetypeCode, type Body32Result, type DimensionKey, type LikertAnswer, type QuizSubmission, type RhythmCode, type ScoreRecord} from './types';
import {getGuardianType} from '@/domain/guardian/registry';

export class AlgorithmInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AlgorithmInputError';
  }
}

function weightedScore(dimensions: ScoreRecord<DimensionKey>, coefficients: ScoreRecord<DimensionKey>): number {
  return DIMENSION_KEYS.reduce((sum, key) => sum + dimensions[key] * coefficients[key], 0);
}

function validateSubmission(submission: QuizSubmission): Readonly<Record<string, LikertAnswer>> {
  if (submission.algorithmVersion !== ALGORITHM_VERSION || submission.questionSetVersion !== QUESTION_SET_VERSION) {
    throw new AlgorithmInputError('Unsupported algorithm or question-set version.');
  }

  const answerKeys = Object.keys(submission.answers);
  if (answerKeys.length !== QUESTION_IDS.length || answerKeys.some((id) => !QUESTION_IDS.includes(id))) {
    throw new AlgorithmInputError('Submission must contain every known question exactly once.');
  }

  for (const id of QUESTION_IDS) {
    const value = submission.answers[id];
    if (!Number.isInteger(value) || value === undefined || value < 1 || value > 5) {
      throw new AlgorithmInputError(`Invalid answer for ${id}.`);
    }
  }

  return submission.answers as Readonly<Record<string, LikertAnswer>>;
}

function calculateDimensions(answers: Readonly<Record<string, LikertAnswer>>): ScoreRecord<DimensionKey> {
  const result = Object.fromEntries(DIMENSION_KEYS.map((key) => [key, 0])) as ScoreRecord<DimensionKey>;

  for (const dimension of DIMENSION_KEYS) {
    const items = QUESTIONS.filter((question) => question.dimension === dimension);
    const total = items.reduce((sum, question) => {
      const raw = answers[question.id];
      if (raw === undefined) throw new AlgorithmInputError(`Missing answer for ${question.id}.`);
      return sum + (question.direction === 'reverse' ? 6 - raw : raw);
    }, 0);
    result[dimension] = (total / items.length - 1) * 25;
  }

  return result;
}

function selectRhythm(scores: ScoreRecord<RhythmCode>, dimensions: ScoreRecord<DimensionKey>) {
  const highest = Math.max(...RHYTHM_CODES.map((code) => scores[code]));
  let candidates = RHYTHM_CODES.filter((code) => scores[code] === highest);
  const initialTie = candidates.length > 1;

  for (const dimensionMap of [RHYTHM_PRIMARY_DIMENSION, RHYTHM_SECONDARY_DIMENSION]) {
    if (candidates.length === 1) break;
    const best = Math.max(...candidates.map((code) => dimensions[dimensionMap[code]]));
    candidates = candidates.filter((code) => dimensions[dimensionMap[code]] === best);
  }

  return {rhythm: candidates[0] ?? 'IGNITE', tieBreakApplied: initialTie};
}

function selectArchetype(initiative: number, flexibility: number, relational: number): ArchetypeCode {
  const key = `${initiative >= 0 ? '+' : '-'}${flexibility >= 0 ? '+' : '-'}${relational >= 0 ? '+' : '-'}`;
  const mapping: Readonly<Record<string, ArchetypeCode>> = {
    '+++': 'DOLPHIN', '++-': 'FOX', '+-+': 'TIGER', '+--': 'WOLF',
    '-++': 'DEER', '-+-': 'CRANE', '--+': 'BEAR', '---': 'OWL'
  };
  const archetype = mapping[key];
  if (!archetype || !ARCHETYPE_CODES.includes(archetype)) throw new Error(`Unknown archetype octant: ${key}`);
  return archetype;
}

export function calculateBody32Result(submission: QuizSubmission): Body32Result {
  const answers = validateSubmission(submission);
  const dimensions = calculateDimensions(answers);
  const rhythmScores = Object.fromEntries(RHYTHM_CODES.map((code) => [code, weightedScore(dimensions, RHYTHM_COEFFICIENTS[code])])) as ScoreRecord<RhythmCode>;
  const {rhythm, tieBreakApplied} = selectRhythm(rhythmScores, dimensions);
  const axes = {
    initiative: dimensions.activation - dimensions.reflection,
    flexibility: dimensions.adaptability - dimensions.steadiness,
    relational: dimensions.connection - 50
  };
  const archetype = selectArchetype(axes.initiative, axes.flexibility, axes.relational);
  const stableTypeId = `B32_${rhythm}_${archetype}`;
  if (!getGuardianType(stableTypeId)) throw new Error(`Stable type is absent from registry: ${stableTypeId}`);
  const elements = Object.fromEntries(ELEMENT_KEYS.map((key) => [key, weightedScore(dimensions, ELEMENT_COEFFICIENTS[key])])) as ScoreRecord<(typeof ELEMENT_KEYS)[number]>;
  const sortedRhythms = RHYTHM_CODES.map((code) => rhythmScores[code]).sort((a, b) => b - a);
  const rhythmMargin = (sortedRhythms[0] ?? 0) - (sortedRhythms[1] ?? 0);
  const archetypeMargin = Math.min(Math.abs(axes.initiative), Math.abs(axes.flexibility), Math.abs(axes.relational));
  const confidence = rhythmMargin >= 12 && archetypeMargin >= 15 ? 'high' : rhythmMargin >= 6 && archetypeMargin >= 8 ? 'medium' : 'low';

  return {algorithmVersion: ALGORITHM_VERSION, questionSetVersion: QUESTION_SET_VERSION, stableTypeId, rhythm, archetype, dimensions, rhythmScores, elements, axes, confidence, tieBreakApplied};
}
