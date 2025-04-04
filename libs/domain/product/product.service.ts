import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./repositories/product.repository";
import { ReqCreateProductDto } from "./dto/req-dto/req-create-product.dto";
import { ResProductDto } from "./dto/res-dto/res-product.dto";
import { ResProductsDto } from "./dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "./dto/res-dto/res-products-by-range-cost.dto";
import { ResUpdateProductDto } from "./dto/res-dto/res-update-product.dto";
import { ReqUpdateProductDto } from "./dto/req-dto/req-update-product.dto";
import { ResProductsByNameDto } from "./dto/res-dto/res-products-by-name.dto";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  createProduct(data: ReqCreateProductDto): Promise<ResProductDto> {
    return this.productRepository.createProduct(data);
  }

  getProduct(productId: string): Promise<ResProductDto> {
    return this.productRepository.getProduct(productId);
  }

  getProducts(name?: string, cost?: number): Promise<ResProductsDto> {
    return this.productRepository.getProducts(name, cost);
  }

  getProductsByName(name: string): Promise<ResProductsByNameDto[]> {
    return this.productRepository.getProductsByName(name);
  }

  getProductsByRangeCost(
    minCost: number,
    maxCost: number,
  ): Promise<ResProductsByRangeCostDto[]> {
    return this.productRepository.getProductsByRangeCost(minCost, maxCost);
  }

  updateProduct(
    productId: string,
    data: ReqUpdateProductDto,
  ): Promise<ResUpdateProductDto> {
    return this.productRepository.updateProduct(productId, data);
  }

  deleteProduct(productId: string): Promise<void> {
    return this.productRepository.deleteProduct(productId);
  }
}
