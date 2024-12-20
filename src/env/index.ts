import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().default('http://localhost:8080'),
  API_PORT: z.coerce.number().default(8080),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format());

  throw new Error('Invalid environment variables.');
}

export const env = _env.data;