import { PrismaService } from 'src/common';
import { ProductEntity } from 'src/useCases/domain/entity';
import { GetAllProductRepository } from 'src/useCases/domain/repository';

export class GetAllProductsSqlLite implements GetAllProductRepository {
  private readonly prisma: PrismaService;

  constructor(_prisma: PrismaService) {
    this.prisma = _prisma;
  }

  public async run(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }
}
