import { ProductEntity } from '../entity';

export interface GetProductByIdRepository {
  run: (id: number) => Promise<ProductEntity | null>;
}
