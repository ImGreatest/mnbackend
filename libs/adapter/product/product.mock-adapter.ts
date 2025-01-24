import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../domain/product/repositories/product.repository";
import { ReqCreateProductDto } from "../../domain/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../domain/product/dto/res-dto/res-product.dto";
import { ResProductsDto } from "../../domain/product/dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "../../domain/product/dto/res-dto/res-products-by-range-cost.dto";
import { ReqUpdateProductDto } from "../../domain/product/dto/req-dto/req-update-product.dto";
import { ResUpdateProductDto } from "../../domain/product/dto/res-dto/res-update-product.dto";
import { ResProductsByNameDto } from "../../domain/product/dto/res-dto/res-products-by-name.dto";

@Injectable()
export class ProductMockAdapter extends ProductRepository {
  constructor() {
    super();
  }

  async createProduct(data: ReqCreateProductDto): Promise<ResProductDto> {
    throw new Error(`${{ ...data }}`);
  }

  async getProduct(productId: string): Promise<ResProductDto> {
    throw new Error(`${productId}`);
  }

  async getProducts(name?: string, cost?: number): Promise<ResProductsDto> {
    throw new Error(`${name}, ${cost}`);
  }

  async getProductsByName(name: string): Promise<ResProductsByNameDto[]> {
    throw new Error(`${name}`);
  }

  async getProductsByRangeCost(
    minCost: number,
    maxCost: number,
  ): Promise<ResProductsByRangeCostDto[]> {
    throw new Error(`${minCost}, ${maxCost}`);
  }

  async updateProduct(
    productId: string,
    data: ReqUpdateProductDto,
  ): Promise<ResUpdateProductDto> {
    throw new Error(`${productId}, ${{ ...data }}`);
  }

  async deleteProduct(productId: string): Promise<void> {
    throw new Error(`${productId}`);
  }
}
