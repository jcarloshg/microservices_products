import 'dotenv/config';

export interface Envs {
  PORT: number;
  DATABASE_URL: string;
}

const getEnvs = (): Envs => {
  const PORT = Number(process.env.PORT);
  if (PORT === undefined) throw new Error('PORT is not defined');

  const DATABASE_URL = process.env.DATABASE_URL;
  if (DATABASE_URL === undefined)
    throw new Error('DATABASE_URL is not defined');

  const envs: Envs = {
    PORT,
    DATABASE_URL,
  };
  console.log(`[envs] -> `, envs);

  return envs;
};

export const envs: Envs = getEnvs();
