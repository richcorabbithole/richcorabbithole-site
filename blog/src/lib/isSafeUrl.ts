/**
 * Validate and sanitize URLs to prevent XSS attacks.
 * Only allows http and https protocols.
 */
export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
