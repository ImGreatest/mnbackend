import { ICategory } from "../../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateCategoryDto implements Omit<ICategory, keyof IExcludeBasicProperties> {
  @ApiProperty({
    type: String,
    required: true,
    description: "Property for name category",
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Array.of(String),
    required: true,
    description: "Property for subcategories of category",
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  subCategories: string[];
}
