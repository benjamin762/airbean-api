import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  isProduction: boolean;
}

const port = Number(process.env.PORT);
if (isNaN(port) || port <= 0) {
  throw new Error('Invalid PORT environment variable');
}

const config: Config = {
  port,
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;