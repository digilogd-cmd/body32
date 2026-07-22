import {describe, expect, it} from 'vitest';

import {ARCHETYPE_CODES, RHYTHM_CODES} from '@/domain/algorithm/types';
import {getGuardianPortrait, GUARDIAN_VISUALS, RHYTHM_VISUAL_CUES} from './visuals';

describe('Guardian visual system', () => {
  it('defines one invariant emblem for every archetype', () => {
    expect(Object.keys(GUARDIAN_VISUALS).sort()).toEqual([...ARCHETYPE_CODES].sort());
    expect(new Set(Object.values(GUARDIAN_VISUALS).map(({shape}) => shape)).size).toBe(8);
  });

  it('defines one visual cue for every rhythm', () => {
    expect(Object.keys(RHYTHM_VISUAL_CUES).sort()).toEqual([...RHYTHM_CODES].sort());
  });

  it('resolves production portraits only for completed Guardian families', () => {
    expect(getGuardianPortrait('TIGER', 'IGNITE')).toEqual({src: '/characters/tiger-ignite-v1.webp'});
    expect(getGuardianPortrait('FOX', 'IGNITE').src).toBe('/characters/fox-ignite-v1.webp');
    expect(getGuardianPortrait('DEER', 'WEAVE').src).toBe('/characters/deer-weave-v1.webp');
    expect(getGuardianPortrait('CRANE', 'IGNITE').src).toBe('/characters/crane-ignite-v1.webp');
    expect(getGuardianPortrait('BEAR', 'GROUND').src).toBe('/characters/bear-ground-v1.webp');
    expect(getGuardianPortrait('WOLF', 'IGNITE').src).toBe('/characters/wolf-ignite-v1.webp');
    expect(getGuardianPortrait('OWL', 'WEAVE').src).toBe('/characters/owl-weave-v1.webp');
    expect(getGuardianPortrait('DOLPHIN', 'REFLECT').src).toBe('/characters/dolphin-reflect-v1.webp');
  });

  it('has a production portrait for every Guardian combination', () => {
    for (const archetype of ARCHETYPE_CODES) {
      for (const rhythm of RHYTHM_CODES) expect(getGuardianPortrait(archetype, rhythm)).toBeDefined();
    }
  });
});
