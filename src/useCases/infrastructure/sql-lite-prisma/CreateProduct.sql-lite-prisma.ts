import { PrismaClient } from '@prisma/client';
import { ProductEntityCreate, ProductEntity } from 'src/useCases/domain/entity';
import { CreateProductRepository } from 'src/useCases/domain/repository/manage-products';

export class CreateProductSqlLite implements CreateProductRepository {
  private readonly prisma: PrismaClient;

  constructor(_prisma: PrismaClient) {
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
