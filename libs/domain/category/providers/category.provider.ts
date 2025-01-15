import { CategoryService } from "../category.service";
import { Provider } from "@nestjs/common";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryAdapter } from "../../../adapter/category/category.adapter";

export const CategoryProvider: Provider[] = [
	CategoryService,
	{
		provide: CategoryRepository,
		useClass: CategoryAdapter
	}
];
