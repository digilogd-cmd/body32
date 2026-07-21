import {describe, expect, it} from 'vitest';

import {passportFilename} from './renderer';

describe('Passport renderer', () => {
  it('creates stable, format-specific filenames', () => {
    expect(passportFilename('08', 'square')).toBe('BODY32-TYPE-08-square.png');
    expect(passportFilename('08', 'story')).toBe('BODY32-TYPE-08-story.png');
  });
});
