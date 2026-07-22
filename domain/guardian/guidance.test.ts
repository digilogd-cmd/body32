import {describe, expect, it} from 'vitest';

import {ARCHETYPE_CODES} from '@/domain/algorithm/types';
import {ARCHETYPE_GUIDANCE} from './guidance';

describe('Guardian guidance', () => {
  it('covers every archetype with complete bilingual guidance', () => {
    expect(Object.keys(ARCHETYPE_GUIDANCE).sort()).toEqual([...ARCHETYPE_CODES].sort());
    for (const content of Object.values(ARCHETYPE_GUIDANCE)) {
      for (const field of [content.strength, content.reflection]) {
        expect(field.ko.length).toBeGreaterThan(10);
        expect(field.en.length).toBeGreaterThan(10);
      }
    }
  });
});
