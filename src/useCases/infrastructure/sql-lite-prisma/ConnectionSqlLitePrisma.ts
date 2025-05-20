import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConnectionRepository } from 'src/useCases/domain/repository';

export class ConnectionSqlLitePrisma
  extends PrismaClient
  implements ConnectionRepository
{
  private readonly _logger: Logger = new Logger('ConnectionSqlLitePrisma');

  public async connect(): Promise<void> {
    await this.$connect();
    this._logger.log('PrismaService initialized');
  }

  public async disconnect(): Promise<void> {
    await this.$disconnect();
    this._logger.log('PrismaService disconnected');
  }
}
