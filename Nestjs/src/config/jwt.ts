import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  accessToken: {
    secret: process.env.ACCESS_TOKEN_SECRET,
  },
}));
