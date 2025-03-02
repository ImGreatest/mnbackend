import { faker } from "@faker-js/faker";
import { IBonus } from "../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

/**
 * Class describing the returns bonus properties of the bonus an account instance
 *
 * @export
 * @property { userId }
 * @property { percentage }
 * @property { bonusValue }
 * @property { startValue }
 * @property { createdAt }
 * @property { updatedAt }
 * @see { IBonus }
 */
export class ResBonusDto implements IBonus {
  @ApiProperty({
    type: String,
    description: "Property of user identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  /**
   * Property userId
   *
   * @type { string }
   */
  userId: string;

  @ApiProperty({
    type: Number,
    description: "Property value of percentage bonuses from actions",
    example: faker.number.int({ min: 1, max: 200 }),
  })
  @IsNumber()
  /**
   * Property percentage
   *
   * @type { number }
   */
  percentage: number;

  @ApiProperty({
    type: Number,
    description: "Property of value bonuses on account",
    example: faker.number.int(),
  })
  @IsNumber()
  /**
   * Property bonusValue
   *
   * @type { number }
   */
  bonusValue: number;

  @ApiProperty({
    type: Number,
    description: "Property of start value bonuses on account",
    example: faker.number.int({ min: 0 }),
  })
  @IsNumber()
  /**
   * Property startValue
   *
   * @type { number }
   */
  startValue: number;

  @ApiProperty({
    type: Date,
    description: "Property of date-time creating user",
    format: "date-time",
    example: faker.date.past(),
  })
  @IsDate()
  /**
   * Property createdAt
   *
   * @type { Date }
   */
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: "Property of date-time last updating user",
    format: "date-time",
    example: faker.date.past(),
  })
  @IsDate()
  /**
   * Property updatedAt
   *
   * @type { Date }
   */
  updatedAt: Date;
}
