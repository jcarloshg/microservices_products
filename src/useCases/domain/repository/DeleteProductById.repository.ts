import { ProductEntity } from '../entity';

export interface DeleteProductByIdRepository {
  run: (id: number) => Promise<ProductEntity | null>;
}
