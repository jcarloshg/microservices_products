import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private readonly _Logger: Logger = new Logger('ProductsService');

  constructor(private readonly prisma: PrismaService) {
    this._Logger.log('ProductsService initialized');
  }

  async create(createProductDto: CreateProductDto) {
    // const productCreated = await this.prisma.product.create({
    //   data: createProductDto,
    // });
    // this._Logger.log('Product created', productCreated);
    // return productCreated;

    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
