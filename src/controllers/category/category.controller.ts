import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { ReqCreateCategoryDto } from "../../../libs/domain/category/dto/req-dto/req-create-category.dto";
import { CategoryService } from "../../../libs/domain/category/category.service";
import { ResCategoryDto } from "../../../libs/domain/category/dto/res-dto/res-category.dto";
import { ResCategoriesDto } from "../../../libs/domain/category/dto/res-dto/res-categories.dto";
import { ReqUpdateCategoryDto } from "../../../libs/domain/category/dto/req-dto/req-update-category.dto";

@ApiTags("category")
@ApiBearerAuth()
@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post("create-category")
  createCategory(@Body() data: ReqCreateCategoryDto): Promise<ResCategoryDto> {
    return this.categoryService.createCategory(data);
  }

  @Get("get-category/:id")
  getCategory(
    @Param("id") id: string,
    @Query() name: string,
  ): Promise<ResCategoryDto> {
    return this.categoryService.getCategory(id, name);
  }

  @Get("get-categories/")
  getCategories(): Promise<ResCategoriesDto> {
    return this.categoryService.getCategories();
  }

  @Post("update-category/:id")
  updateCategory(
    @Param("id") id: string,
    @Body() data: ReqUpdateCategoryDto,
  ): Promise<ResCategoryDto> {
    return this.categoryService.updateCategory(id, data);
  }

  @Delete("delete-category/:id")
  deleteCategory(@Param("id") id: string): Promise<void> {
    return this.categoryService.deleteCategory(id);
  }
}
