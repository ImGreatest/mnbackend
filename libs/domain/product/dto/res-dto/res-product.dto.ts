import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsNumber, IsString } from "class-validator";
import { IProduct } from "../../../../shared/entity";

export class ResProductDto implements IProduct {
  @ApiProperty({
    type: String,
    required: true,
    description: "Identifier product",
    example: faker.string.uuid(),
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Namely of product",
    example: faker.commerce.product(),
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Attribute description product",
    example: faker.lorem.sentence(),
  })
  @IsString()
  description?: string;

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
  @IsString()
  compound: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Property is identifier collection",
    example: faker.string.uuid(),
  })
  @IsString()
  collectionId: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Property is identifier category",
    example: faker.string.uuid(),
  })
  @IsString()
  categoryId: string;

  @ApiProperty({
    type: Date,
    description: "Parameter for date-time value creating product",
    example: faker.date.past(),
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: "Parameter for date-time value last updating product",
    example: faker.date.past(),
  })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({
    type: Date,
    format: "date-time",
    description: "Parameter for date-time value deleting product",
    example: faker.date.past(),
  })
  @IsDate()
  deletedAt: Date;
}
