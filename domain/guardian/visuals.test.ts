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
    expect(getGuardianPortrait('TIGER', 'IGNITE')).toEqual({src: '/characters/tiger-rhythms-v1.png', sheetPosition: 0});
    expect(getGuardianPortrait('TIGER', 'REFLECT')?.sheetPosition).toBe(3);
    expect(getGuardianPortrait('FOX', 'IGNITE')).toBeUndefined();
  });
});
