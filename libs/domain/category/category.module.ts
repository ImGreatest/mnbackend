import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryProvider } from "./providers/category.provider";

@Module({
	providers: [...CategoryProvider],
	exports: [CategoryService],
})
export class CategoryModule {}
