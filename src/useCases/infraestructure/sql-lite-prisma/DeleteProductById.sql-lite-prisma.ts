import { PrismaService } from 'src/common';
import { ProductEntity } from 'src/useCases/domain/entity';
import { DeleteProductByIdRepository } from 'src/useCases/domain/repository';

export class DeleteProductByIdSqlLite implements DeleteProductByIdRepository {
  private readonly prisma: PrismaService;

  constructor(_prisma: PrismaService) {
    this.prisma = _prisma;
  }

  public async run(id: number): Promise<ProductEntity | null> {
    try {
      const productDeleted = await this.prisma.product.delete({
        where: { id },
      });
      return productDeleted;
    } catch (error) {
      console.log('Error deleting product:', error);
      return null;
    }
  }
}
