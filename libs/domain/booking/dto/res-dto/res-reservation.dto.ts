import { IsDate, IsString } from "class-validator";
import { DateTime } from "luxon";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ResReservationDto {
	@ApiProperty({
		type: String,
		description: 'Reservation identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		type: String,
		description: 'User identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		description: 'Reservation start of the time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	bookStartTime: DateTime;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		description: 'Reservation an end of the time',
		example: DateTime.fromJSDate(faker.date.future()),
	})
	@IsDate()
	bookEndTime: DateTime;

	@ApiProperty({
		type: String,
		required: false,
		description: 'Optional parameter for comment to reservation',
		example: faker.lorem.sentence(),
	})
	@IsString()
	comment?: string;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		description: 'Parameter for date-time value creating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	createdAt: DateTime;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		description: 'Parameter for date-time value last updating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	updatedAt: DateTime;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		description: 'Parameter for date-time value deleting reservation',
		example: faker.date.past(),
	})
	@IsDate()
	deletedAt?: DateTime;
}
