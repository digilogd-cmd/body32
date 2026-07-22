import type {ArchetypeCode, RhythmCode} from '@/domain/algorithm/types';

export type GuardianShape = 'stripe' | 'path' | 'antlers' | 'wing' | 'shelter' | 'peaks' | 'rings' | 'wave';

export interface GuardianVisualProfile {
  readonly shape: GuardianShape;
  readonly emblem: string;
}

export const GUARDIAN_VISUALS: Readonly<Record<ArchetypeCode, GuardianVisualProfile>> = {
  TIGER: {shape: 'stripe', emblem: 'Split sun-stripe'},
  FOX: {shape: 'path', emblem: 'Turning path'},
  DEER: {shape: 'antlers', emblem: 'Paired leaf-antlers'},
  CRANE: {shape: 'wing', emblem: 'Horizon wing'},
  BEAR: {shape: 'shelter', emblem: 'Protective shelter'},
  WOLF: {shape: 'peaks', emblem: 'Twin horizon peaks'},
  OWL: {shape: 'rings', emblem: 'Focused orbit'},
  DOLPHIN: {shape: 'wave', emblem: 'Rising current'}
};

export const RHYTHM_VISUAL_CUES: Readonly<Record<RhythmCode, string>> = {
  IGNITE: 'rays',
  WEAVE: 'loops',
  GROUND: 'arches',
  REFLECT: 'facets'
};

export interface GuardianPortraitAsset {
  readonly src: string;
  readonly sheetPosition: number;
}

const tigerSheetPositions: Readonly<Record<RhythmCode, number>> = {IGNITE: 0, WEAVE: 1, GROUND: 2, REFLECT: 3};

const portraitSheets: Partial<Record<ArchetypeCode, string>> = {
  TIGER: '/characters/tiger-rhythms-v1.png',
  FOX: '/characters/fox-rhythms-v1.png',
  DEER: '/characters/deer-rhythms-v1.png'
};

export function getGuardianPortrait(archetype: ArchetypeCode, rhythm: RhythmCode): GuardianPortraitAsset | undefined {
  const src = portraitSheets[archetype];
  if (!src) return undefined;
  return {src, sheetPosition: tigerSheetPositions[rhythm]};
}
