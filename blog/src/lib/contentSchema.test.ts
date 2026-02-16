import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

// Re-create the schema here to test validation rules independently of Astro runtime
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  hyperfixation: z.enum(['tech', 'science', 'history', 'gaming', 'maker', 'other']),
  researchDepth: z.number().min(1).max(5),
  tags: z.array(z.string()),
  draft: z.boolean().optional(),
  featured: z.boolean().optional(),
  coverImage: z.string().optional(),
  sources: z.array(z.string()).optional()
});

const validPost = {
  title: 'Test Post',
  description: 'A test description',
  publishDate: '2026-02-09',
  hyperfixation: 'tech' as const,
  researchDepth: 3,
  tags: ['test', 'example']
};

describe('blog content schema', () => {
  it('accepts a valid post', () => {
    expect(() => blogSchema.parse(validPost)).not.toThrow();
  });

  it('accepts a post with all optional fields', () => {
    const full = {
      ...validPost,
      draft: true,
      featured: false,
      coverImage: '/images/cover.jpg',
      sources: ['https://example.com']
    };
    expect(() => blogSchema.parse(full)).not.toThrow();
  });

  it('rejects missing title', () => {
    const { title, ...rest } = validPost;
    expect(() => blogSchema.parse(rest)).toThrow();
  });

  it('rejects missing description', () => {
    const { description, ...rest } = validPost;
    expect(() => blogSchema.parse(rest)).toThrow();
  });

  it('rejects invalid publishDate format', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, publishDate: 'Feb 9 2026' })
    ).toThrow();
  });

  it('rejects publishDate with wrong separator', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, publishDate: '2026/02/09' })
    ).toThrow();
  });

  it('rejects invalid hyperfixation value', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, hyperfixation: 'cooking' })
    ).toThrow();
  });

  it.each(['tech', 'science', 'history', 'gaming', 'maker', 'other'])(
    'accepts hyperfixation "%s"',
    (category) => {
      expect(() =>
        blogSchema.parse({ ...validPost, hyperfixation: category })
      ).not.toThrow();
    }
  );

  it('rejects researchDepth below 1', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, researchDepth: 0 })
    ).toThrow();
  });

  it('rejects researchDepth above 5', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, researchDepth: 6 })
    ).toThrow();
  });

  it('rejects non-array tags', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, tags: 'not-an-array' })
    ).toThrow();
  });

  it('accepts empty tags array', () => {
    expect(() =>
      blogSchema.parse({ ...validPost, tags: [] })
    ).not.toThrow();
  });
});
