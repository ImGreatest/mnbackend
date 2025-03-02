import { IFavorite } from "../../../../shared/entity/favorite.entity";
import { IsDate, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ResRelationDto implements IFavorite {
  @ApiProperty({
    type: String,
    description: "Property identifier relation",
    example: faker.string.uuid(),
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: String,
    description: "Property of user identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  userId: string;

  @ApiProperty({
    type: String,
    description: "Property of product identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  productId: string;

  @ApiProperty({
    type: Date,
    format: "date-time",
    description: "Parameter for date-time value creating product",
    example: faker.date.past(),
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    format: "date-time",
    description: "Parameter for date-time value last updating product",
    example: faker.date.past(),
  })
  @IsDate()
  updatedAt?: Date;

  @ApiProperty({
    type: Date,
    format: "date-time",
    description: "Parameter for date-time value deleting product",
    example: faker.date.past(),
  })
  @IsDate()
  deletedAt?: Date;
}
