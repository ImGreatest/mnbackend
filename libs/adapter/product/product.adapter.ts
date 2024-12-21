import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../domain/product/repository/product.repository";
import { ReqCreateProductDto } from "../../domain/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../domain/product/dto/res-dto/res-product.dto";
import { ResProductsDto } from "../../domain/product/dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "../../domain/product/dto/res-dto/res-products-by-range-cost.dto";
import { ReqUpdateProductDto } from "../../domain/product/dto/req-dto/req-update-product.dto";
import { ResUpdateProductDto } from "../../domain/product/dto/res-dto/res-update-product.dto";
import { ResProductsByNameDto } from "../../domain/product/dto/res-dto/res-products-by-name.dto";
import { logger } from "../../../logger/logger";
import { PrismaService } from "../../services/prisma/prisma.service";

@Injectable()
export class ProductAdapter extends ProductRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('ProductAdapter was init');
	}

	async createProduct(data: ReqCreateProductDto): Promise<void> {
		logger.verbose(`ProductAdapter called createProduct with param - ${JSON.stringify(data)}`);

		await this.prisma.product.create({ data: { ...data }});
	}

	async getProduct(productId: string): Promise<ResProductDto> {
		logger.verbose(`ProductAdapter called getProducts with param - ${JSON.stringify(productId)}`);

		return this.prisma.product.findUnique({ where: { id: productId } });
	}

	async getProducts(name?: string, cost?: number): Promise<ResProductsDto> {
		logger.verbose(`ProductAdapter called getProducts with params - ${JSON.stringify(name)}, ${JSON.stringify(cost)}`);

		const products = await this.prisma.product.findMany({
			where: {
				name: name,
				cost: cost,
			},
		});

		return {
			products: products.map(product => ({
				...product,
			})),
		}
	}

	async getProductsByName(name: string): Promise<ResProductsByNameDto[]> {
		logger.verbose(`ProductAdapter called getProductsByName with param - ${JSON.stringify(name)}`);

		return this.prisma.product.findMany({
			where: {
				name: name,
			},
		});
	}

	async getProductsByRangeCost(minCost: number, maxCost: number): Promise<ResProductsByRangeCostDto[]> {
		logger.verbose(`ProductAdapter called getProductsByRangeCost with params - ${JSON.stringify(minCost)}, ${JSON.stringify(maxCost)}`);

		return this.prisma.product.findMany({
			where: {
				cost: {
					gte: minCost,
					lte: maxCost,
				},
			},
		});
	}

	async updateProduct(productId: string, data: ReqUpdateProductDto): Promise<ResUpdateProductDto> {
		logger.verbose(`ProductAdapter called updateProduct with params - ${JSON.stringify(productId)}, ${JSON.stringify(data)}`);

		return this.prisma.product.update({
			where: {
				id: productId,
			},
			data: {
				...data,
			},
		});
	}

	async deleteProduct(productId: string): Promise<void> {
		logger.verbose(`ProductAdapter called deleteProduct with param - ${JSON.stringify(productId)}`);

		await this.prisma.product.delete({
			where: {
				id: productId,
			},
		});
	}
}
