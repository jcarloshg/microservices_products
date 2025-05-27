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
  console.log(`[microservice] -> TCP on port ${envs.PORT_MICRO_SERVICE}`);

  await app.listen(envs.PORT_REST);
  logger.log(`[rest] -> HTTP on port ${envs.PORT_REST}`);
}

bootstrap();
