import { IsDate, IsString } from "class-validator";
import { DateTime } from "luxon";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ResUpdatedReservationDto {
	@ApiProperty({
		required: true,
		description: 'For value of user an identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		required: true,
		description: 'Reservation start of the time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	bookStartTime: DateTime;

	@ApiProperty({
		required: true,
		description: 'Reservation an end of the time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	bookEndTime: DateTime;

	@ApiProperty({
		required: false,
		description: 'Optional parameter for comment to reservation',
		example: faker.lorem.sentence(),
	})
	@IsString()
	comment?: string;

	@ApiProperty({
		format: 'date-time',
		required: true,
		description: 'Parameter for date-time value creating reservation',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	createdAt: DateTime;

	@ApiProperty({
		format: 'date-time',
		required: false,
		description: 'Parameter for date-time value last updating reservation',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	updatedAt?: DateTime;

	@ApiProperty({
		format: 'date-time',
		required: false,
		description: 'Parameter for date-time value deleting reservation',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	deletedAt?: DateTime;
}
