import { IBonus } from "../../../shared/entity";
import { IExcludeBasicProperties } from "../../../shared/interfaces/exclude-basic-properties.interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

/**
 * Class describing properties which needs for creating user bonus account
 *
 * @export
 * @property { userId }
 * @property { percentage }
 * @property { bonusValue }
 * @property { startValue }
 */
export class ReqCreateBonusAccountDto
  implements Omit<IBonus, keyof IExcludeBasicProperties>
{
  @ApiProperty({
    type: String,
    required: true,
    description: "Property of identifier user",
  })
  @IsString({ message: "Property of userId must be string type" })
  @IsNotEmpty({ message: "Property of userId is required" })
  userId: string;

  @ApiProperty({
    type: Number,
    required: false,
    default: 1,
    description: "Property value of percentage bonuses from actions",
  })
  @IsOptional()
  @IsNumber()
  percentage?: number;

  @ApiProperty({
    type: Number,
    required: false,
    default: 0,
    description: "Property of value bonus an account",
  })
  @IsOptional()
  @IsNumber()
  bonusValue?: number;

  @ApiProperty({
    type: Number,
    required: false,
    default: 0,
    description: "Property of start value bonus an account",
  })
  @IsOptional()
  @IsNumber()
  startValue?: number;
}
