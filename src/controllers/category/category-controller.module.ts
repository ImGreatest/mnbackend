import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryModule } from "../../../libs/domain/category/category.module";

@Module({
  imports: [CategoryModule],
  controllers: [CategoryController],
})
export class CategoryControllerModule {}
