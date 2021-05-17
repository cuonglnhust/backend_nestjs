import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 3306,
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [__dirname + '/../**/**.entity{.ts,.js}'], // process.env.TYPEORM_ENTITIES.split(','),
    migrationsRun: true,
    synchronize: false,
    autoLoadEntities: true
   
  }),
);
