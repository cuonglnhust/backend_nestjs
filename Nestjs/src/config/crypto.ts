import { registerAs } from '@nestjs/config';

export default registerAs('crypto', () => ({
  qrPassword: process.env.QR_PASSWORD,
}));
