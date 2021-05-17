import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  name: process.env.NAME,
  port: +process.env.API_PORT,
  environment: process.env.NODE_ENV,
  corsOrigin() {
    return process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(',')
      : 'http://localhost:3000';
  },
  isProduction() {
    return this.environment === 'production';
  },
}));
