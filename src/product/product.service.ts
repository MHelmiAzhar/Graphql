import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaClient: PrismaService) {}

  async create(createProductInput: CreateProductInput) {
    return await this.prismaClient.product.create({
      data: { ...createProductInput },
    });
  }

  async findAll() {
    return await this.prismaClient.product.findMany();
  }

  async findOne(id: number) {
    return await this.prismaClient.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    return await this.prismaClient.product.update({
      where: { id },
      data: { ...updateProductInput },
    });
  }

  async remove(id: number) {
    return await this.prismaClient.product.delete({ where: { id } });
  }
}
