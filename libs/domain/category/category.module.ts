import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryRepository } from "./repository/category.repository";
import { CategoryAdapter } from "../../adapter/category/category.adapter";

@Module({
	providers: [
		CategoryService,
		{
			provide: CategoryRepository,
			useClass: CategoryAdapter,
		}
	],
	exports: [CategoryService],
})
export class CategoryModule {}