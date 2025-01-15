import { CategoryRepository } from "../../domain/category/repositories/category.repository";
import { Injectable } from "@nestjs/common";
import { ReqCreateCategoryDto } from "../../domain/category/dto/req-dto/req-create-category.dto";
import { logger } from "../../../logger/logger";
import { ResCategoryDto } from "../../domain/category/dto/res-dto/res-category.dto";
import { ResCategoriesDto } from "../../domain/category/dto/res-dto/res-categories.dto";
import { ReqUpdateCategoryDto } from "../../domain/category/dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryMockAdapter extends CategoryRepository {
	constructor() {
		super();
		logger.info('CategoryMockAdapter was init');
	}

	async createCategory(data: ReqCreateCategoryDto): Promise<ResCategoryDto> {
		logger.verbose(`CategoryMockAdapter was called createCategory with param - ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getCategory(id: string, name?: string): Promise<ResCategoryDto> {
		logger.verbose(`CategoryMockAdapter was called getCategory with param - ${JSON.stringify(id)}, ${JSON.stringify(name)}`);
		throw new Error(`${JSON.stringify(id)}, ${JSON.stringify(name)}`);
	}

	async getCategories(): Promise<ResCategoriesDto> {
		logger.verbose('CategoryMockAdapter was called getCategories method without params');
		throw new Error('Was called getCategories method');
	}

	async updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<ResCategoryDto> {
		logger.verbose(`CategoryMockAdapter was called updateCategory method with param - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(id)}, ${JSON.stringify(data)}`);
	}

	async deleteCategory(id: string): Promise<void> {
		logger.verbose(`CategoryMockAdapter was called deleteCategory method with param - ${JSON.stringify(id)}`);
		throw new Error(`${JSON.stringify(id)}`);
	}
}