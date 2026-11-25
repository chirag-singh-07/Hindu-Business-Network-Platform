import { z } from 'zod';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  API_PREFIX: z.string().regex(/^[a-zA-Z0-9/-]+$/).default('api/v1'),
  CORS_ORIGINS: z.string().default('http://localhost:3001,http://localhost:3002'),
  MONGODB_URI: z.string().regex(/^mongodb(\+srv)?:\/\//),
});

export type Environment = z.infer<typeof environmentSchema>;

export function validateEnvironment(input: Record<string, unknown>): Environment {
  const parsed = environmentSchema.safeParse(input);
  if (!parsed.success) {
    const details = parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ');
    throw new Error(`Invalid environment configuration: ${details}`);
  }
  return parsed.data;
}
