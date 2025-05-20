import { PrismaService } from 'src/common';
import { ProductEntity } from 'src/useCases/domain/entity';
import { GetProductByIdRepository } from 'src/useCases/domain/repository';

export class GetProductByIdSqlLite implements GetProductByIdRepository {
  private readonly prisma: PrismaService;

  constructor(_prisma: PrismaService) {
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
