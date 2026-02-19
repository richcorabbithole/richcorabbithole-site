import { describe, it, expect } from 'vitest';
import { categoryConfig, type Category } from '../../src/lib/categoryConfig';

describe('categoryConfig', () => {
  const categories = Object.keys(categoryConfig) as Category[];

  it('has at least the original seven categories', () => {
    const baseline = ['tech', 'science', 'history', 'gaming', 'maker', 'pop-culture', 'other'];
    for (const cat of baseline) {
      expect(categories).toContain(cat);
    }
  });

  it.each(categories)('"%s" has a label and color', (category) => {
    const config = categoryConfig[category];
    expect(config).toBeDefined();
    expect(config.label).toBeTruthy();
    expect(config.color).toBeTruthy();
  });

  it('labels are uppercase slugs (hyphens become spaces for multi-word categories)', () => {
    for (const [key, value] of Object.entries(categoryConfig)) {
      expect(value.label).toBe(key.toUpperCase().replace(/-/g, ' '));
    }
  });

  it('colors reference CSS custom properties', () => {
    for (const value of Object.values(categoryConfig)) {
      expect(value.color).toMatch(/^var\(--color-cat-[\w-]+\)$/);
    }
  });
});
