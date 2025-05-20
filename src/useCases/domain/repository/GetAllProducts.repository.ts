import { ProductEntity } from '../entity';

export interface GetAllProductRepository {
  run: () => Promise<ProductEntity[]>;
}
