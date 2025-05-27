import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsMicroserviceController } from './products-microservice.controller';
import { ManageProductsService } from 'src/useCases/application/manage-products/manage-products.service';
import { ProductsRestController } from './products-rest.controller';

@Module({
  controllers: [ProductsMicroserviceController, ProductsRestController],
  providers: [ManageProductsService, ProductsService],
})
export class ProductsModule {}
