import { IBonusOperation } from "../../../../shared/entity/bonus-operations.entity";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsNumber, IsString } from "class-validator";

export class ResBonusOperationsDto implements IBonusOperation {
  @ApiProperty({
    type: String,
    description: "Property identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  id: string;

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
  updatedAt: Date;
}
