import type {DimensionKey, ElementKey, RhythmCode, ScoreRecord} from './types';

export const ALGORITHM_VERSION = 'body32-v1-draft';

type Coefficients = ScoreRecord<DimensionKey>;

export const RHYTHM_COEFFICIENTS: Readonly<Record<RhythmCode, Coefficients>> = {
  IGNITE: {activation: 0.6, adaptability: 0.15, steadiness: 0.1, reflection: 0.05, connection: 0.1},
  WEAVE: {activation: 0.1, adaptability: 0.45, steadiness: 0.05, reflection: 0.1, connection: 0.3},
  GROUND: {activation: 0.05, adaptability: 0.05, steadiness: 0.55, reflection: 0.2, connection: 0.15},
  REFLECT: {activation: 0.05, adaptability: 0.15, steadiness: 0.15, reflection: 0.55, connection: 0.1}
};

export const ELEMENT_COEFFICIENTS: Readonly<Record<ElementKey, Coefficients>> = {
  wood: {activation: 0.25, adaptability: 0.45, steadiness: 0.1, reflection: 0.05, connection: 0.15},
  fire: {activation: 0.55, adaptability: 0.1, steadiness: 0.05, reflection: 0.05, connection: 0.25},
  earth: {activation: 0.05, adaptability: 0.05, steadiness: 0.55, reflection: 0.15, connection: 0.2},
  metal: {activation: 0.1, adaptability: 0.05, steadiness: 0.3, reflection: 0.45, connection: 0.1},
  water: {activation: 0.05, adaptability: 0.3, steadiness: 0.1, reflection: 0.45, connection: 0.1}
};

export const RHYTHM_PRIMARY_DIMENSION: Readonly<Record<RhythmCode, DimensionKey>> = {
  IGNITE: 'activation',
  WEAVE: 'adaptability',
  GROUND: 'steadiness',
  REFLECT: 'reflection'
};

export const RHYTHM_SECONDARY_DIMENSION: Readonly<Record<RhythmCode, DimensionKey>> = {
  IGNITE: 'adaptability',
  WEAVE: 'connection',
  GROUND: 'reflection',
  REFLECT: 'steadiness'
};
