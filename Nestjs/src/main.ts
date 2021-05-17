import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const configService = app.get(ConfigService);
  const origin = configService.get('api.corsOrigin')();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.enableCors({
    origin,
    credentials: true,
  });
  const port = configService.get('api.port', 4001);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('document/api', app, document);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
