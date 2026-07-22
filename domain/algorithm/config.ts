import type {DimensionKey, ElementKey, RhythmCode, ScoreRecord} from './types';

export const ALGORITHM_VERSION = 'body32-profile-v1';

type Coefficients = ScoreRecord<DimensionKey>;

export const RHYTHM_COEFFICIENTS: Readonly<Record<RhythmCode, Coefficients>> = {
  IGNITE: {energy: 0.5, recovery: 0.05, thermalComfort: 0.25, digestiveRhythm: 0.05, stressFlexibility: 0.15},
  WEAVE: {energy: 0.2, recovery: 0.15, thermalComfort: 0.1, digestiveRhythm: 0.2, stressFlexibility: 0.35},
  GROUND: {energy: 0.05, recovery: 0.4, thermalComfort: 0.05, digestiveRhythm: 0.35, stressFlexibility: 0.15},
  REFLECT: {energy: 0.05, recovery: 0.45, thermalComfort: 0.1, digestiveRhythm: 0.15, stressFlexibility: 0.25}
};

export const ELEMENT_COEFFICIENTS: Readonly<Record<ElementKey, Coefficients>> = {
  wood: {energy: 0.3, recovery: 0.1, thermalComfort: 0.05, digestiveRhythm: 0.1, stressFlexibility: 0.45},
  fire: {energy: 0.5, recovery: 0.05, thermalComfort: 0.35, digestiveRhythm: 0.05, stressFlexibility: 0.05},
  earth: {energy: 0.05, recovery: 0.3, thermalComfort: 0.05, digestiveRhythm: 0.5, stressFlexibility: 0.1},
  metal: {energy: 0.05, recovery: 0.4, thermalComfort: 0.1, digestiveRhythm: 0.25, stressFlexibility: 0.2},
  water: {energy: 0.05, recovery: 0.4, thermalComfort: 0.05, digestiveRhythm: 0.1, stressFlexibility: 0.4}
};

export const RHYTHM_PRIMARY_DIMENSION: Readonly<Record<RhythmCode, DimensionKey>> = {
  IGNITE: 'energy',
  WEAVE: 'stressFlexibility',
  GROUND: 'digestiveRhythm',
  REFLECT: 'recovery'
};

export const RHYTHM_SECONDARY_DIMENSION: Readonly<Record<RhythmCode, DimensionKey>> = {
  IGNITE: 'thermalComfort',
  WEAVE: 'digestiveRhythm',
  GROUND: 'recovery',
  REFLECT: 'stressFlexibility'
};
