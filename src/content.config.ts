import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    track: z.enum(['tendering', 'iso', 'dev']),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    excerpt: z.string(),
    cover: z.string(),
    tags: z.array(z.object({ label: z.string(), accent: z.boolean().default(false) })),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['website', 'app', 'project', 'tender']),
    client: z.string(),
    role: z.string(),
    year: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    outcome: z.string().optional(),
    link: z.string().optional(),
    cover: z.string(),
    tags: z.array(z.object({ label: z.string(), accent: z.boolean().default(false) })),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    employment: z.string().default('Full-time'),
    location: z.string().default('Centurion, Gauteng'),
    meta: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, portfolio, experience };
