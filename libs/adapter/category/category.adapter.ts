import { CategoryRepository } from "../../domain/category/repository/category.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateCategoryDto } from "../../domain/category/dto/req-dto/req-create-category.dto";
import { logger } from "../../../logger/logger";
import { ResCategoryDto } from "../../domain/category/dto/res-dto/res-category.dto";
import { ResCategoriesDto } from "../../domain/category/dto/res-dto/res-categories.dto";
import { ReqUpdateCategoryDto } from "../../domain/category/dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryAdapter extends CategoryRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('CategoryAdapter was init');
	}

	async createCategory(data: ReqCreateCategoryDto): Promise<ResCategoryDto> {
		logger.verbose(`CategoryAdapter called createCategory method with param - ${JSON.stringify(data)}`);
		return await this.prisma.category.create({ data: { ...data } });
	}

	async getCategory(id: string, name?: string): Promise<ResCategoryDto> {
		logger.verbose(`CategoryAdapter called getCategory method with param - ${JSON.stringify(id)}, ${JSON.stringify(name)}`);
		return this.prisma.category.findUnique({ where: { id: id, name: name } });
	}

	async getCategories(): Promise<ResCategoriesDto> {
		logger.verbose('CategoryAdapter called getCategories method without any params');
		const categories = await this.prisma.category.findMany();

		return {
			categories: categories.map(category => ({
				...category,
			})),
		}
	}

	async updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<ResCategoryDto> {
		logger.verbose(`CategoryAdapter called updateCategory with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);

		return await this.prisma.category.update({
			where: {
				id: id,
			},
			data: {
				...data,
			},
		});
	}

	async deleteCategory(id: string): Promise<void> {
		logger.verbose(`CategoryAdapter called deleteCategory with param - ${JSON.stringify(id)}`);
		await this.prisma.category.delete({
			where: {
				id: id,
			},
		});
	}
}
