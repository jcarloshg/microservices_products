import { ProductEntity, ProductEntityCreate } from '../entity';

export interface CreateProductRepository {
  run: (product: ProductEntityCreate) => Promise<ProductEntity>;
}
