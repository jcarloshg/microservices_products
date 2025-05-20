import { ProductEntity } from './Product.entity';

export type ProductEntityCreate = Pick<
  ProductEntity,
  'name' | 'price' | 'available'
>;
