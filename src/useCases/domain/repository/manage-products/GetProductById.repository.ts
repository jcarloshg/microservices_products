import { ProductEntity } from 'src/useCases/domain/entity';

export class GetProductByIdRepository {
  run(id: number): Promise<ProductEntity | null> {
    throw new Error(`Method not implemented. ${id}`);
  }
}
