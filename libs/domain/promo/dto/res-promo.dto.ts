import { IPromo } from "../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";
import { EPromoType } from "@prisma/client";

export class ResPromoDto implements IPromo {
  @ApiProperty({
    type: String,
    description: "Property of identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: String,
    description: "Property of content code",
  })
  @IsString()
  code: string;

  @ApiProperty({
    type: Date,
    description: "Property of date start time active promo",
  })
  @IsDate()
  startTimeActive: Date;

  @ApiProperty({
    type: Date,
    description: "Property of date end time active promo",
  })
  @IsDate()
  endTimeActive: Date;

  @ApiProperty({
    type: EPromoType,
    description: "Property type of promo code",
    example:
      EPromoType[
        faker.number.int({
          min: 0,
          max: Object.keys(EPromoType).length,
        })
      ],
  })
  @IsEnum(EPromoType)
  type: EPromoType;

  @ApiProperty({
    type: Number,
    description: "Property of percentage after using promo code",
    example: faker.number.int({ min: 1, max: 100 }),
  })
  @IsNumber()
  percentage: number;

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
