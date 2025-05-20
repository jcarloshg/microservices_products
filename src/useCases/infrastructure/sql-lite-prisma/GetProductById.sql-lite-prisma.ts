import { PrismaClient } from '@prisma/client';
import { ProductEntity } from 'src/useCases/domain/entity';
import { GetProductByIdRepository } from 'src/useCases/domain/repository/manage-products';

export class GetProductByIdSqlLite implements GetProductByIdRepository {
  private readonly prisma: PrismaClient;

  constructor(_prisma: PrismaClient) {
    this.prisma = _prisma;
  }

  public async run(id: number): Promise<ProductEntity | null> {
    try {
      const product = await this.prisma.product.findUnique({
        where: { id },
      });
      return product;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      return null;
    }
  }
}
