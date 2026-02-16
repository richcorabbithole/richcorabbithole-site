import { describe, it, expect } from 'vitest';
import { categoryConfig } from './categoryConfig';

describe('categoryConfig', () => {
  const expectedCategories = ['tech', 'science', 'history', 'gaming', 'maker', 'other'];

  it('has all six categories', () => {
    expect(Object.keys(categoryConfig)).toEqual(expectedCategories);
  });

  it.each(expectedCategories)('"%s" has a label and color', (category) => {
    const config = categoryConfig[category];
    expect(config).toBeDefined();
    expect(config.label).toBeTruthy();
    expect(config.color).toBeTruthy();
  });

  it('labels are uppercase versions of category keys', () => {
    for (const [key, value] of Object.entries(categoryConfig)) {
      expect(value.label).toBe(key.toUpperCase());
    }
  });

  it('colors reference CSS custom properties', () => {
    for (const value of Object.values(categoryConfig)) {
      expect(value.color).toMatch(/^var\(--color-cat-\w+\)$/);
    }
  });
});
