import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    hyperfixation: z.enum(['tech', 'science', 'history', 'gaming', 'maker', 'other']),
    researchDepth: z.number().min(1).max(5),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    coverImage: z.string().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
