import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  private readonly _Logger: Logger = new Logger('ProductsService');

  constructor(private readonly prisma: PrismaService) {
    this._Logger.log('ProductsService initialized');
  }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const productCreated: Product = await this.prisma.product.create({
      data: createProductDto,
    });
    return productCreated;
  }

  async findAll() {
    const products = await this.prisma.product.findMany();
    return products;
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
