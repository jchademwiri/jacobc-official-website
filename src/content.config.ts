import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    track: z.enum(['tendering', 'iso', 'dev']),
    date: z.coerce.date(),
    readTime: z.string(),
    excerpt: z.string(),
    cover: z.string(),
    tags: z.array(z.object({ label: z.string(), accent: z.boolean().default(false) })),
  }),
});

export const collections = { blog };
