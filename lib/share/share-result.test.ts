import {afterEach, describe, expect, it, vi} from 'vitest';

import {shareResult} from './share-result';

const payload = {title: 'BODY32', text: 'My result', url: 'http://localhost:3000/ko/quiz'};

afterEach(() => vi.restoreAllMocks());

describe('shareResult', () => {
  it('uses native sharing without exposing a localhost URL', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', {configurable: true, value: share});

    await expect(shareResult(payload)).resolves.toBe('shared');
    expect(share).toHaveBeenCalledWith({title: 'BODY32', text: 'My result'});
  });

  it('copies the summary when native sharing is unavailable', async () => {
    Object.defineProperty(navigator, 'share', {configurable: true, value: undefined});
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText}});

    await expect(shareResult(payload)).resolves.toBe('copied');
    expect(writeText).toHaveBeenCalledWith('My result');
  });

  it('does not copy when the user cancels the share sheet', async () => {
    const writeText = vi.fn();
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText}});
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: vi.fn().mockRejectedValue(new DOMException('Cancelled', 'AbortError'))
    });

    await expect(shareResult(payload)).resolves.toBe('cancelled');
    expect(writeText).not.toHaveBeenCalled();
  });
});
