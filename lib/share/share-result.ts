export type ShareResultStatus = 'shared' | 'copied' | 'cancelled' | 'error';

export interface ShareResultPayload {
  title: string;
  text: string;
  url?: string;
}

function isPublicWebUrl(value: string) {
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:')
      && !['localhost', '127.0.0.1', '::1'].includes(url.hostname);
  } catch {
    return false;
  }
}

export async function shareResult(payload: ShareResultPayload): Promise<ShareResultStatus> {
  const publicUrl = payload.url && isPublicWebUrl(payload.url) ? payload.url : undefined;
  const shareData: ShareData = {
    title: payload.title,
    text: payload.text,
    ...(publicUrl ? {url: publicUrl} : {})
  };

  if (typeof navigator.share === 'function') {
    try {
      await navigator.share(shareData);
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return 'cancelled';
    }
  }

  try {
    await navigator.clipboard.writeText([payload.text, publicUrl].filter(Boolean).join('\n'));
    return 'copied';
  } catch {
    return 'error';
  }
}
