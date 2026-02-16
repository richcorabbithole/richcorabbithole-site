import { describe, it, expect } from 'vitest';
import { getDepthLabel, depthLabels } from './depthLabels';

describe('getDepthLabel', () => {
  it('returns Surface for depth 1', () => {
    expect(getDepthLabel(1)).toBe('Surface');
  });

  it('returns Shallow for depth 2', () => {
    expect(getDepthLabel(2)).toBe('Shallow');
  });

  it('returns Medium for depth 3', () => {
    expect(getDepthLabel(3)).toBe('Medium');
  });

  it('returns Deep for depth 4', () => {
    expect(getDepthLabel(4)).toBe('Deep');
  });

  it('returns Abyssal for depth 5', () => {
    expect(getDepthLabel(5)).toBe('Abyssal');
  });

  it('returns Unknown for depth 0', () => {
    expect(getDepthLabel(0)).toBe('Unknown');
  });

  it('returns Unknown for depth 6', () => {
    expect(getDepthLabel(6)).toBe('Unknown');
  });

  it('returns Unknown for negative depth', () => {
    expect(getDepthLabel(-1)).toBe('Unknown');
  });
});

describe('depthLabels', () => {
  it('contains exactly 5 labels', () => {
    expect(depthLabels).toHaveLength(5);
  });
});
