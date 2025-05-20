import { PrismaService } from 'src/common';
import { ProductEntityCreate, ProductEntity } from 'src/useCases/domain/entity';
import { CreateProductRepository } from 'src/useCases/domain/repository';

export class CreateProductSqlLite implements CreateProductRepository {
  private readonly prisma: PrismaService;

  constructor(_prisma: PrismaService) {
    this.prisma = _prisma;
  }

  public async run(product: ProductEntityCreate): Promise<ProductEntity> {
    const productCreated = await this.prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
      },
    });
    return productCreated;
  }
}
