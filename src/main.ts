import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs, ValidationPipeInit } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(ValidationPipeInit);

  await app.listen(envs.PORT);
}

bootstrap();
