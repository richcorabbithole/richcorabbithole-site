import { describe, it, expect } from 'vitest';
import { isSafeUrl } from '../../src/lib/isSafeUrl';

describe('isSafeUrl', () => {
  it('accepts https URLs', () => {
    expect(isSafeUrl('https://example.com')).toBe(true);
  });

  it('accepts http URLs', () => {
    expect(isSafeUrl('http://example.com')).toBe(true);
  });

  it('accepts URLs with paths', () => {
    expect(isSafeUrl('https://example.com/path/to/page')).toBe(true);
  });

  it('accepts URLs with query params', () => {
    expect(isSafeUrl('https://example.com?q=search&page=1')).toBe(true);
  });

  it('rejects javascript: protocol', () => {
    expect(isSafeUrl('javascript:alert(1)')).toBe(false);
  });

  it('rejects data: protocol', () => {
    expect(isSafeUrl('data:text/html,<h1>XSS</h1>')).toBe(false);
  });

  it('rejects ftp: protocol', () => {
    expect(isSafeUrl('ftp://files.example.com')).toBe(false);
  });

  it('rejects file: protocol', () => {
    expect(isSafeUrl('file:///etc/passwd')).toBe(false);
  });

  it('rejects invalid URL', () => {
    expect(isSafeUrl('not a url')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(isSafeUrl('')).toBe(false);
  });

  it('rejects relative paths', () => {
    expect(isSafeUrl('/relative/path')).toBe(false);
  });
});
