import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ManageProductsService } from 'src/useCases/application/manage-products/manage-products.service';

@Module({
  controllers: [ProductsController],
  providers: [ManageProductsService, ProductsService],
})
export class ProductsModule {}
