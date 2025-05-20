import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Product } from '@prisma/client';
import { PaginationDto } from 'src/common/dto';

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

  async findAll(paginationDto: PaginationDto) {
    const totalProducts = await this.prisma.product.count();
    const products = await this.prisma.product.findMany({
      skip: (paginationDto.page - 1) * paginationDto.limit,
      take: paginationDto.limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      data: products,
      metaData: {
        totalProducts: totalProducts,
        totalPages: Math.ceil(totalProducts / paginationDto.limit),
      },
    };
  }

  async findOne(id: number): Promise<Product | null> {
    const productFound = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (productFound === null)
      throw new NotFoundException(`Product with id ${id} not found`);

    return productFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productUpdated = await this.prisma.product.update({
        where: {
          id: id,
        },
        data: {
          ...updateProductDto,
        },
      });
      return productUpdated;
    } catch (error) {
      this._Logger.error(`Error updating product with id ${id}`, error);
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.product.update({
      where: { id },
      data: { available: false },
    });
  }
}
