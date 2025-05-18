import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeInit } from './utils/main/ValidationPipeInit';
import { envs } from './config/index';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(ValidationPipeInit);

  await app.listen(envs.PORT);
}

bootstrap();
