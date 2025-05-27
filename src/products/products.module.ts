import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ManageProductsService } from 'src/useCases/application/manage-products/manage-products.service';
import { ProductsRestController } from './products-rest.controller';

@Module({
  controllers: [ProductsController, ProductsRestController],
  providers: [ManageProductsService, ProductsService],
})
export class ProductsModule {}
