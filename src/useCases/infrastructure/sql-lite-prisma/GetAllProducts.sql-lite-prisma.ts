import { PrismaClient } from '@prisma/client';
import { ProductEntity } from 'src/useCases/domain/entity';
import { GetAllProductRepository } from 'src/useCases/domain/repository/manage-products';

export class GetAllProductsSqlLite implements GetAllProductRepository {
  private readonly prisma: PrismaClient;

  constructor(_prisma: PrismaClient) {
    this.prisma = _prisma;
  }

  public async run(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        available: true,
      },
    });
    return products;
  }
}
