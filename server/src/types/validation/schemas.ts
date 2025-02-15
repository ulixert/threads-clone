import { z } from 'zod';

export const postQuerySchema = z.object({
  cursor: z.coerce.number().int().default(0),
  limit: z.coerce.number().int().positive().default(10),
});

export const postParamsSchema = z.object({
  postId: z.coerce.number().int().positive(),
});

export const createPostPramsSchema = z.object({
  parentPostId: z.coerce.number().int().positive().optional(),
});
