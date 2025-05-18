import 'dotenv/config';

export interface Envs {
  PORT: number;
}

const getEnvs = (): Envs => {
  const PORT = Number(process.env.PORT);
  if (PORT === undefined) throw new Error('PORT is not defined');

  const envs: Envs = {
    PORT,
  };
  console.log(`[envs] -> `, envs);

  return envs;
};

export const envs: Envs = getEnvs();
