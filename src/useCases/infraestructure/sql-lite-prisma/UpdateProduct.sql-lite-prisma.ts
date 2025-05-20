import { PrismaService } from 'src/common';
import { ProductEntity, ProductEntityUpdate } from 'src/useCases/domain/entity';
import { UpdateProductRepository } from 'src/useCases/domain/repository';

export class UpdateProductSqlLite implements UpdateProductRepository {
  private readonly prisma: PrismaService;

  constructor(_prisma: PrismaService) {
    this.prisma = _prisma;
  }

  public async run(
    id: number,
    data: ProductEntityUpdate,
  ): Promise<ProductEntity | null> {
    try {
      const productUpdated = await this.prisma.product.update({
        where: { id },
        data,
      });
      return productUpdated;
    } catch (error) {
      console.error('Error updating product:', error);
      return null;
    }
  }
}
