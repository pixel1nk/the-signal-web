import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title:       z.string(),
        description: z.string(),
        pubDate:     z.date(),
        author:      z.string().optional(),
        specialty:   z.string().optional(),
        lang:        z.enum(['en', 'es']),
        tags:        z.array(z.string()).optional(),
        draft:       z.boolean().default(false),
    }),
});

export const collections = { blog };
