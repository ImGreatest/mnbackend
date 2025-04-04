import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsArray, IsDate, IsString } from "class-validator";
import { ICategory } from "../../../../shared/entity";

export class ResCategoryDto implements ICategory {
  @ApiProperty({
    type: String,
    description: "Property for identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: String,
    description: "Property of name category",
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Array.of(String),
    description: "Property subcategories of category",
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  subcategories: string[];

  @ApiProperty({
    type: Date,
    description: "Parameter for date-time value creating reservation",
    example: faker.date.past(),
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: "Parameter for date-time value last updating reservation",
    example: faker.date.past(),
  })
  @IsDate()
  updatedAt?: Date;

  @ApiProperty({
    type: Date,
    description: "Parameter for date-time value deleting reservation",
    example: faker.date.past(),
  })
  @IsDate()
  deletedAt?: Date;
}
