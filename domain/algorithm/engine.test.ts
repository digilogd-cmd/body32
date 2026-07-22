import {describe, expect, it} from 'vitest';

import {ALGORITHM_VERSION, ELEMENT_COEFFICIENTS, RHYTHM_COEFFICIENTS} from './config';
import {calculateBody32Result, AlgorithmInputError} from './engine';
import {QUESTIONS, QUESTION_SET_VERSION} from './questions';
import {DIMENSION_KEYS, ELEMENT_KEYS, RHYTHM_CODES, type DimensionKey, type QuizSubmission} from './types';
import {GUARDIAN_TYPES, getGuardianType} from '@/domain/guardian/registry';

function submissionFor(targets: Partial<Record<DimensionKey, 0 | 50 | 100>> = {}): QuizSubmission {
  return {
    algorithmVersion: ALGORITHM_VERSION,
    questionSetVersion: QUESTION_SET_VERSION,
    answers: Object.fromEntries(QUESTIONS.map((question) => {
      const target = targets[question.dimension] ?? 50;
      const scored = target === 100 ? 5 : target === 0 ? 1 : 3;
      return [question.id, question.direction === 'reverse' ? 6 - scored : scored];
    }))
  };
}

describe('BODY32 algorithm', () => {
  it('produces a stable neutral result and records tie-breaking', () => {
    const result = calculateBody32Result(submissionFor());
    expect(result.dimensions).toEqual(Object.fromEntries(DIMENSION_KEYS.map((key) => [key, 50])));
    expect(result.rhythm).toBe('IGNITE');
    expect(result.archetype).toBe('DOLPHIN');
    expect(result.tieBreakApplied).toBe(true);
    expect(result.stableTypeId).toBe('B32_IGNITE_DOLPHIN');
  });

  it('maps a clear active, steady, relational pattern to Ignite Tiger', () => {
    const result = calculateBody32Result(submissionFor({energy: 100, recovery: 100, thermalComfort: 100, digestiveRhythm: 100, stressFlexibility: 0}));
    expect(result.rhythm).toBe('IGNITE');
    expect(result.archetype).toBe('TIGER');
    expect(result.stableTypeId).toBe('B32_IGNITE_TIGER');
    expect(result.bodyScore).toBeCloseTo(66.67, 1);
  });

  it('is deterministic and bounded', () => {
    const submission = submissionFor({energy: 100, recovery: 50, thermalComfort: 0, digestiveRhythm: 50, stressFlexibility: 100});
    const first = calculateBody32Result(submission);
    const second = calculateBody32Result(submission);
    expect(first).toEqual(second);
    for (const value of [...Object.values(first.dimensions), ...Object.values(first.rhythmScores), ...Object.values(first.elements)]) {
      expect(Number.isFinite(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(100);
    }
  });

  it('rejects incomplete, unknown-version, and out-of-range submissions', () => {
    expect(() => calculateBody32Result({...submissionFor(), answers: {}})).toThrow(AlgorithmInputError);
    expect(() => calculateBody32Result({...submissionFor(), algorithmVersion: 'unknown'})).toThrow(AlgorithmInputError);
    const invalid = submissionFor();
    expect(() => calculateBody32Result({...invalid, answers: {...invalid.answers, Q_ENE_01: 6}})).toThrow(AlgorithmInputError);
  });
});

describe('algorithm configuration', () => {
  it('keeps every coefficient row normalized', () => {
    for (const coefficients of [...Object.values(RHYTHM_COEFFICIENTS), ...Object.values(ELEMENT_COEFFICIENTS)]) {
      expect(DIMENSION_KEYS.reduce((sum, key) => sum + coefficients[key], 0)).toBeCloseTo(1);
    }
  });

  it('contains a complete and unique 32-type registry', () => {
    expect(GUARDIAN_TYPES).toHaveLength(32);
    expect(new Set(GUARDIAN_TYPES.map((item) => item.stableId)).size).toBe(32);
    expect(new Set(GUARDIAN_TYPES.map((item) => item.displayOrder)).size).toBe(32);
    for (const rhythm of RHYTHM_CODES) {
      expect(GUARDIAN_TYPES.filter((item) => item.rhythm === rhythm)).toHaveLength(8);
    }
    for (const guardian of GUARDIAN_TYPES) expect(getGuardianType(guardian.stableId)).toEqual(guardian);
  });

  it('defines all expected dimensions and elements', () => {
    expect(DIMENSION_KEYS).toHaveLength(5);
    expect(ELEMENT_KEYS).toHaveLength(5);
  });
});
