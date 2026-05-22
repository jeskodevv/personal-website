import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── PROJECTS ─────────────────────────────────────────────────────────────
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: z.enum(['active', 'paused', 'archived', 'learning', 'unstable', 'stable']),
    description: z.string(),
    started: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    archived: z.boolean().default(false),
    version: z.string().default('0.1'),
    draft: z.boolean().default(false)
  })
});

// ─── JOURNALS ───────────────────────────────────────────────────────────────
const journals = defineCollection({
  loader: glob({ base: './src/content/journals', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

// ─── NOTES ──────────────────────────────────────────────────────────────────
const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

// ─── WRITINGS ───────────────────────────────────────────────────────────────
const writings = defineCollection({
  loader: glob({ base: './src/content/writings', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

// ─── LAB (EXPERIMENTS) ────────────────────────────────────────────────────
const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['active', 'completed', 'failed', 'paused']),
    started: z.coerce.date(),
    hypothesis: z.string().optional(),
    conclusion: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

// ─── TOOLBOX ──────────────────────────────────────────────────────────────
const toolbox = defineCollection({
  loader: glob({ base: './src/content/toolbox', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    version: z.string().optional(),
    category: z.string(),
    why: z.string(),
    alternatives: z.string().optional(),
    date: z.coerce.date()
  })
});

// ─── ARCHIVES ───────────────────────────────────────────────────────────────
const archives = defineCollection({
  loader: glob({ base: './src/content/archives', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    reason: z.string(),
    date: z.coerce.date(),
    originalType: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  projects,
  journals,
  notes,
  writings,
  lab,
  toolbox,
  archives
};