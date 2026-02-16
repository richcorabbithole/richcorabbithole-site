import { describe, it, expect } from 'vitest';
import { formatPublishDate } from '../../src/lib/formatPublishDate';

describe('formatPublishDate', () => {
  it('formats a valid YYYY-MM-DD date', () => {
    expect(formatPublishDate('2026-02-09')).toBe('February 9, 2026');
  });

  it('formats January correctly', () => {
    expect(formatPublishDate('2025-01-15')).toBe('January 15, 2025');
  });

  it('formats December correctly', () => {
    expect(formatPublishDate('2024-12-25')).toBe('December 25, 2024');
  });

  it('returns raw string for invalid format', () => {
    expect(formatPublishDate('not-a-date')).toBe('not-a-date');
  });

  it('returns raw string for partial date', () => {
    expect(formatPublishDate('2026-02')).toBe('2026-02');
  });

  it('returns raw string for empty string', () => {
    expect(formatPublishDate('')).toBe('');
  });

  it('returns raw string for month out of range (00)', () => {
    expect(formatPublishDate('2026-00-15')).toBe('2026-00-15');
  });

  it('returns raw string for month out of range (13)', () => {
    expect(formatPublishDate('2026-13-15')).toBe('2026-13-15');
  });

  it('returns raw string for day 0', () => {
    expect(formatPublishDate('2026-01-00')).toBe('2026-01-00');
  });

  it('returns raw string for day 32', () => {
    expect(formatPublishDate('2026-01-32')).toBe('2026-01-32');
  });

  it('handles first day of year', () => {
    expect(formatPublishDate('2026-01-01')).toBe('January 1, 2026');
  });

  it('handles last day of year', () => {
    expect(formatPublishDate('2026-12-31')).toBe('December 31, 2026');
  });
});
