import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "./repository/category.repository";
import { ReqCreateCategoryDto } from "./dto/req-dto/req-create-category.dto";
import { ResCategoriesDto } from "./dto/res-dto/res-categories.dto";
import { ResCategoryDto } from "./dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "./dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryService {
	constructor(private readonly categoryRep: CategoryRepository) {}

	createCategory(data: ReqCreateCategoryDto): Promise<void> {
		return this.categoryRep.createCategory(data);
	}

	getCategory(id: string, name?: string): Promise<ResCategoryDto> {
		return this.categoryRep.getCategory(id, name);
	}

	getCategories(): Promise<ResCategoriesDto> {
		return this.categoryRep.getCategories();
	}

	updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<void> {
		return this.categoryRep.updateCategory(id, data);
	}

	deleteCategory(id: string): Promise<void> {
		return this.categoryRep.deleteCategory(id);
	}
}
