import { Injectable } from "@nestjs/common";
import { ResCategoryDto } from "../dto/res-dto/res-category.dto";
import { ResCategoriesDto } from "../dto/res-dto/res-categories.dto";
import { ReqCreateCategoryDto } from "../dto/req-dto/req-create-category.dto";
import { ReqUpdateCategoryDto } from "../dto/req-dto/req-update-category.dto";

@Injectable()
export abstract class CategoryRepository {
	abstract createCategory(data: ReqCreateCategoryDto): Promise<ResCategoryDto>;

	abstract getCategory(id: string, name?: string): Promise<ResCategoryDto>;

	abstract getCategories(): Promise<ResCategoriesDto>;

	abstract updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<ResCategoryDto>;

	abstract deleteCategory(id: string): Promise<void>;
}
