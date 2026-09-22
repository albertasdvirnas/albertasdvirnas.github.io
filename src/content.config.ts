import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Research reviews: one .md or .mdx file per review in src/content/reviews/.
 * The file name becomes the URL: edm-attractor.mdx -> /reviews/edm-attractor.html
 */
const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),                          // one-paragraph standfirst under the title
    kicker: z.string().default('Research review'), // mono line above the title
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    assisted: z.boolean().default(true),      // drafted with Claude; shown in the byline
    draft: z.boolean().default(false),        // drafts are built in dev only
  }),
});

export const collections = { reviews };
