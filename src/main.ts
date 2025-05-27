import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs, ValidationPipeInit } from './common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main');

  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: envs.PORT,
      },
    },
  );

  app.useGlobalPipes(ValidationPipeInit);
  // await app.listen(envs.PORT);
  await app.listen();

  logger.log(`Microservice - Products is running on port ${envs.PORT}`);
}

bootstrap();
