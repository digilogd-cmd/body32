export const DIMENSION_KEYS = [
  'energy',
  'recovery',
  'thermalComfort',
  'digestiveRhythm',
  'stressFlexibility'
] as const;

export const RHYTHM_CODES = ['IGNITE', 'WEAVE', 'GROUND', 'REFLECT'] as const;

export const ARCHETYPE_CODES = [
  'TIGER',
  'FOX',
  'DEER',
  'CRANE',
  'BEAR',
  'WOLF',
  'OWL',
  'DOLPHIN'
] as const;

export const ELEMENT_KEYS = ['wood', 'fire', 'earth', 'metal', 'water'] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];
export type RhythmCode = (typeof RHYTHM_CODES)[number];
export type ArchetypeCode = (typeof ARCHETYPE_CODES)[number];
export type ElementKey = (typeof ELEMENT_KEYS)[number];
export type LikertAnswer = 1 | 2 | 3 | 4 | 5;
export type ConfidenceBand = 'low' | 'medium' | 'high';

export type ScoreRecord<Key extends string> = Record<Key, number>;

export interface LocalizedText {
  readonly ko: string;
  readonly en: string;
}

export interface QuizQuestion {
  readonly id: string;
  readonly dimension: DimensionKey;
  readonly direction: 'positive' | 'reverse';
  readonly prompt: LocalizedText;
  readonly order: number;
}

export interface QuizSubmission {
  readonly algorithmVersion: string;
  readonly questionSetVersion: string;
  readonly answers: Readonly<Record<string, number>>;
}

export interface Body32Result {
  readonly algorithmVersion: string;
  readonly questionSetVersion: string;
  readonly stableTypeId: string;
  readonly rhythm: RhythmCode;
  readonly archetype: ArchetypeCode;
  readonly dimensions: ScoreRecord<DimensionKey>;
  readonly rhythmScores: ScoreRecord<RhythmCode>;
  readonly elements: ScoreRecord<ElementKey>;
  readonly axes: {
    readonly initiative: number;
    readonly adaptability: number;
    readonly resilience: number;
  };
  readonly bodyScore: number;
  readonly strongestSignals: readonly DimensionKey[];
  readonly quietestSignals: readonly DimensionKey[];
  readonly confidence: ConfidenceBand;
  readonly tieBreakApplied: boolean;
}
