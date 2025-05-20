import { ProductEntity, ProductEntityUpdate } from 'src/useCases/domain/entity';

export class UpdateProductRepository {
  run(id: number, data: ProductEntityUpdate): Promise<ProductEntity | null> {
    throw new Error(`Method not implemented. ${id}, ${JSON.stringify(data)}`);
  }
}
