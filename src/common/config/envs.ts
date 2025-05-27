import 'dotenv/config';

export interface Envs {
  PORT_REST: number;
  PORT_MICRO_SERVICE: number;
  DATABASE_URL: string;
}

const getEnvs = (): Envs => {
  const PORT_REST = Number(process.env.PORT_REST);
  if (PORT_REST === undefined) throw new Error('PORT_REST is not defined');

  const DATABASE_URL = process.env.DATABASE_URL;
  if (DATABASE_URL === undefined)
    throw new Error('DATABASE_URL is not defined');

  const PORT_MICRO_SERVICE = Number(process.env.PORT_MICRO_SERVICE);
  if (PORT_MICRO_SERVICE === undefined)
    throw new Error('PORT_MICRO_SERVICE is not defined');

  const envs: Envs = {
    PORT_REST: PORT_REST,
    PORT_MICRO_SERVICE: PORT_MICRO_SERVICE,
    DATABASE_URL,
  };

  console.log(`[envs] -> `, envs);

  return envs;
};

export const envs: Envs = getEnvs();
