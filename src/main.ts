import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs, ValidationPipeInit } from './common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main');

  // Crear la app HTTP
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(ValidationPipeInit);

  // Conectar microservicio TCP
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: envs.PORT_MICRO_SERVICE,
    },
  });

  await app.startAllMicroservices();
  await app.listen(envs.PORT_REST);

  logger.log(
    `Microservice - Products is running on port ${envs.PORT_REST} (HTTP & TCP)`,
  );
}

bootstrap();
