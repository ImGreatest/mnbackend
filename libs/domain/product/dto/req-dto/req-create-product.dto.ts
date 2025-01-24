import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
import { IProduct } from "../../../../shared/entity";

export class ReqCreateProductDto
  implements Omit<IProduct, keyof IExcludeBasicProperties>
{
  @ApiProperty({
    type: String,
    required: true,
    description: "Namely of product",
    example: faker.commerce.product(),
  })
  @IsString({ message: "Name value type must be string" })
  name: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property of description product",
    example: faker.lorem.sentence(),
  })
  @IsString({ message: "Description value type must be string" })
  desc?: string;

  @ApiProperty({
    type: Number,
    required: true,
    description: "Cost product",
    example: faker.number.int(),
  })
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: String,
    required: true,
    description: "Description product compound",
    example: faker.lorem.slug(),
  })
  @IsString({ message: "Compound value type must be string" })
  compound: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Property identifier collection to refer product",
    example: faker.string.uuid(),
  })
  @IsString({ message: "Collection identifier value type must be string" })
  collectionId: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Property identifier category to refer product",
    example: faker.string.uuid(),
  })
  @IsString({ message: "Category identifier value must be string" })
  categoryId: string;
}
