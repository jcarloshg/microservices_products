import { ProductEntity } from './Product.entity';

export type ProductEntityUpdate = Partial<
  Pick<ProductEntity, 'name' | 'price' | 'available'>
>;
