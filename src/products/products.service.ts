import {
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ManageProductsService } from 'src/useCases/application/manage-products/manage-products.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  private readonly _Logger: Logger = new Logger('ProductsService');
  private readonly _manageProductsService: ManageProductsService;

  constructor(manageProductsService: ManageProductsService) {
    this._Logger.log('ProductsService initialized');
    this._manageProductsService = manageProductsService;
  }

  public async create(createProductDto: CreateProductDto): Promise<Product> {
    // add bussiness logic here
    const productCreated = await this._manageProductsService.create.run({
      name: createProductDto.name,
      price: createProductDto.price,
    });
    // add more bussiness logic here
    return productCreated;
  }

  public async findAll() {
    // add bussiness logic here
    const products = await this._manageProductsService.getAll.run();
    // add more bussiness logic here
    return products;
  }

  // async findAll(paginationDto: PaginationDto) {
  //   // const totalProducts = await this.prisma.product.count({
  //   //   where: { available: true },
  //   // });
  //   // const products = await this.prisma.product.findMany({
  //   //   skip: (paginationDto.page - 1) * paginationDto.limit,
  //   //   take: paginationDto.limit,
  //   //   orderBy: {
  //   //     createdAt: 'desc',
  //   //   },
  //   //   where: {
  //   //     available: true,
  //   //   },
  //   // });
  //   // return {
  //   //   data: products,
  //   //   metaData: {
  //   //     totalProducts: totalProducts,
  //   //     totalPages: Math.ceil(totalProducts / paginationDto.limit),
  //   //   },
  //   // };
  // }

  public async findOne(id: number): Promise<Product | null> {
    const productFound = await this._manageProductsService.getById.run(id);
    if (productFound === null)
      throw new NotFoundException(`Product with id ${id} not found`);
    return productFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productUpdated = await this._manageProductsService.update.run(id, {
        available: updateProductDto.available,
        name: updateProductDto.name,
        price: updateProductDto.price,
      });
      return productUpdated;
    } catch (error) {
      this._Logger.error(`Error updating product with id ${id}`, error);
      // throw new NotFoundException(`Product with id ${id} not found`);
      throw new RpcException({
        message: `Product with id ${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }
  }

  async remove(id: number): Promise<Product> {
    try {
      const productDeleted =
        await this._manageProductsService.deleteById.run(id);
      if (productDeleted === null)
        throw new NotFoundException(`Product with id ${id} not found`);
      return productDeleted;
    } catch (error) {
      this._Logger.error(`Error deleting product with id ${id}`, error);
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
}
