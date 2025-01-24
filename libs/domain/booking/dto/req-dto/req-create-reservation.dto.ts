import { IsDate, IsString } from "class-validator";
import { DateTime } from "luxon";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ReqCreateReservationDto {
  @ApiProperty({
    type: String,
    required: true,
    description: "For value of user an identifier",
    example: faker.string.uuid(),
  })
  @IsString()
  userId: string;

  @ApiProperty({
    type: DateTime,
    required: true,
    format: "date-time",
    description: "Reservation start of the time",
    example: DateTime.fromJSDate(faker.date.past()),
  })
  @IsDate()
  bookStartTime: DateTime;

  @ApiProperty({
    type: DateTime,
    required: true,
    format: "date-time",
    description: "Reservation an end of the time",
    example: DateTime.fromJSDate(faker.date.future()),
  })
  @IsDate()
  bookEndTime: DateTime;

  @ApiProperty({
    type: String,
    required: false,
    description: "Optional parameter for comment to reservation",
    example: faker.lorem.sentence(),
  })
  @IsString()
  comment?: string;
}
