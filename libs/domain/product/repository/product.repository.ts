import { Injectable } from "@nestjs/common";
import { ReqCreateProductDto } from "../dto/req-dto/req-create-product.dto";
import { ReqUpdateProductDto } from "../dto/req-dto/req-update-product.dto";
import { ResProductDto } from "../dto/res-dto/res-product.dto";
import { ResProductsDto } from "../dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "../dto/res-dto/res-products-by-range-cost.dto";
import { ResUpdateProductDto } from "../dto/res-dto/res-update-product.dto";
import { ResProductsByNameDto } from "../dto/res-dto/res-products-by-name.dto";

@Injectable()
export abstract class ProductRepository {
	abstract createProduct(data: ReqCreateProductDto): Promise<void>;

	abstract getProduct(productId: string): Promise<ResProductDto>;

	abstract getProducts(name?: string, cost?: number): Promise<ResProductsDto>;

	abstract getProductsByName(name: string): Promise<ResProductsByNameDto[]>;

	abstract getProductsByRangeCost(minCost: number, maxCost: number): Promise<ResProductsByRangeCostDto[]>;

	abstract updateProduct(productId: string, data: ReqUpdateProductDto): Promise<ResUpdateProductDto>;

	abstract deleteProduct(productId: string): Promise<void>;
}
