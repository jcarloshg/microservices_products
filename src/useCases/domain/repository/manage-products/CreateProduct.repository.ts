import { ProductEntity, ProductEntityCreate } from 'src/useCases/domain/entity';

export class CreateProductRepository {
  public run(product: ProductEntityCreate): Promise<ProductEntity> {
    throw new Error(`Method not implemented. ${JSON.stringify(product)}`);
  }
}
