import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly _logger: Logger = new Logger('PrismaService');

  async onModuleInit() {
    await this.$connect();
    this._logger.log('PrismaService initialized');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this._logger.log('PrismaService disconnected');
  }
}
