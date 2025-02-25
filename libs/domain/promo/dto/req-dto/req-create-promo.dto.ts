import { IPromo } from "../../../../shared/entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
import { EPromoType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";
import { faker } from "@faker-js/faker";

export class ReqCreatePromoDto
  implements Omit<IPromo, keyof IExcludeBasicProperties>
{
  @ApiProperty({
    type: String,
    required: true,
    description: "Property of content code",
  })
  @IsString()
  code: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: "Property of date start time active promo",
  })
  @IsDate()
  startTimeActive: Date;

  @ApiProperty({
    type: Date,
    required: true,
    description: "Property of date end time active promo",
  })
  @IsDate()
  endTimeActive: Date;

  @ApiProperty({
    type: EPromoType,
    required: true,
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
    required: true,
    description: "Property of percentage after using promo code",
    example: faker.number.int({ min: 1, max: 100 }),
  })
  @IsNumber()
  percentage: number;
}
