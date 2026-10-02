import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://linwoodforest.com'),
  NEXT_PUBLIC_SELF_QUOTING_PORTAL_URL: z.string().url().optional(),
  NEXT_PUBLIC_TERM_LIFE_RATER_URL: z.string().url().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().trim().optional(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SELF_QUOTING_PORTAL_URL: process.env.NEXT_PUBLIC_SELF_QUOTING_PORTAL_URL,
  NEXT_PUBLIC_TERM_LIFE_RATER_URL: process.env.NEXT_PUBLIC_TERM_LIFE_RATER_URL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
});
