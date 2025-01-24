import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsString } from "class-validator";
import { faker } from "@faker-js/faker";
import { IUser } from "../../../../shared/entity";
import { ERole } from "@prisma/client";

/**
 * Class describing the returns order properties of the user instance
 *
 * @export
 * @class ResUserDto
 * @property id
 * @property login
 * @property email
 * @property phone
 * @property password
 * @property role
 * @property createdAt
 * @property updatedAt
 * @see { IUser }
 */
export class ResUserDto implements IUser {
  @ApiProperty({
    type: String,
    required: true,
    description: "Property id user",
    example: faker.string.uuid(),
  })
  @IsString()
  /**
   * Property identifier user
   *
   * @requires
   * @type { string }
   */
  id: string;

  @ApiProperty({
    type: String,
    description: "Property login user",
    required: true,
    example: faker.person.fullName(),
  })
  @IsString()
  /**
   * Property login
   *
   * @type { string }
   * @requires
   */
  login: string;

  @ApiProperty({
    type: String,
    description: "Property email user",
    required: true,
    example: faker.internet.email(),
  })
  @IsString()
  /**
   * Property email
   *
   * @type { string }
   * @requires
   */
  email: string;

  @ApiProperty({
    type: String,
    description: "Property phone user",
    required: true,
    example: String(faker.phone.number()),
  })
  @IsString()
  /**
   * Property phone
   *
   * @type { string }
   * @requires
   */
  phone: string;

  @ApiProperty({
    type: String,
    description: "Property password user",
    required: true,
  })
  @IsString()
  /**
   * Property password
   *
   * @type { string }
   */
  password: string;

  @ApiProperty({
    type: String,
    description: "Property role user",
  })
  @IsEnum(ERole)
  /**
   * Property role
   *
   * @type { string }
   */
  role: ERole;

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
