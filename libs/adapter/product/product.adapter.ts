import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../domain/product/repository/product.repository";
import { ReqCreateProductDto } from "../../domain/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../domain/product/dto/res-dto/res-product.dto";
import { ResProductsDto } from "../../domain/product/dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "../../domain/product/dto/res-dto/res-products-by-range-cost.dto";
import { ReqUpdateProductDto } from "../../domain/product/dto/req-dto/req-update-product.dto";
import { ResUpdateProductDto } from "../../domain/product/dto/res-dto/res-update-product.dto";
import { ResProductsByNameDto } from "../../domain/product/dto/res-dto/res-products-by-name.dto";

@Injectable()
export class ProductAdapter extends ProductRepository {
	constructor() {
		super();
	}

	async createProduct(data: ReqCreateProductDto): Promise<void> {
		throw new Error();
	}

	async getProduct(productId: string): Promise<ResProductDto> {
		throw new Error();
	}

	async getProducts(name?: string, cost?: number): Promise<ResProductsDto[]> {
		throw new Error();
	}

	async getProductsByName(name: string): Promise<ResProductsByNameDto[]> {
		throw new Error();
	}

	async getProductsByRangeCost(minCost: number, maxCost: number): Promise<ResProductsByRangeCostDto[]> {
		throw new Error();
	}

	async updateProduct(productId: string, data: ReqUpdateProductDto): Promise<ResUpdateProductDto> {
		throw new Error();
	}

	async deleteProduct(productId: string): Promise<void> {
		throw new Error();
	}
}
