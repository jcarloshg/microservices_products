import { ProductEntity, ProductEntityUpdate } from '../entity';

export interface UpdateProductRepository {
  run: (id: number, data: ProductEntityUpdate) => Promise<ProductEntity | null>;
}
