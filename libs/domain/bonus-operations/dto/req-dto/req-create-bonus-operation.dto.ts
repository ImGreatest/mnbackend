import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsNumber, IsString } from "class-validator";
import { IBonusOperation } from "../../../../shared/entity/bonus-operations.entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateBonusOperationDto
  implements Omit<IBonusOperation, keyof IExcludeBasicProperties>
{
  @ApiProperty({
    type: String,
    description: "Property of bonus account identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  bonusAccountId: string;

  @ApiProperty({
    type: String,
    description: "Property of order identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  orderId: string;

  @ApiProperty({
    type: Number,
    description: "Property of amount bonus operation",
    example: faker.number.int({ min: 0 }),
  })
  @IsNumber()
  amount: number;
}
