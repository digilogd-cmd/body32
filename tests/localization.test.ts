import {describe, expect, it} from 'vitest';

import en from '@/messages/en.json';
import ko from '@/messages/ko.json';

function flatten(value: unknown, prefix = '', result: Record<string, string> = {}) {
  if (!value || typeof value !== 'object') return result;
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === 'object') flatten(child, path, result);
    else if (typeof child === 'string') result[path] = child;
  }
  return result;
}

describe('localized product copy', () => {
  const korean = flatten(ko);
  const english = flatten(en);

  it('keeps Korean and English message schemas identical', () => {
    expect(Object.keys(korean).sort()).toEqual(Object.keys(english).sort());
  });

  it('contains no empty or replacement-character copy', () => {
    for (const messages of [korean, english]) {
      for (const message of Object.values(messages)) {
        expect(message.trim().length).toBeGreaterThan(0);
        expect(message).not.toContain('\uFFFD');
        expect(message).not.toContain('??');
      }
    }
  });
});
