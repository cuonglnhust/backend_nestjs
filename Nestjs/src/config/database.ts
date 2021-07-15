import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: 3306,
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [__dirname + '/../**/**.entity{.ts,.js}'], // process.env.TYPEORM_ENTITIES.split(','),
    migrationsRun: true,
    synchronize: false,
    autoLoadEntities: true
   
  }),
);
