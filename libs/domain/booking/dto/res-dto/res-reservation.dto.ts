import { IsDate, IsString } from "class-validator";
import { DateTime } from "luxon";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ResReservationDto {
	@ApiProperty({
		description: 'Reservation identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		description: 'User identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		format: 'date-time',
		description: 'Reservation start of the time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	bookStartTime: DateTime;

	@ApiProperty({
		format: 'date-time',
		description: 'Reservation an end of the time',
		example: DateTime.fromJSDate(faker.date.future()),
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
		type: DateTime,
		format: 'date-time',
		description: 'Parameter for date-time value creating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	createdAt: DateTime;

	@ApiProperty({
		format: 'date-time',
		description: 'Parameter for date-time value last updating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	updatedAt: DateTime;

	@ApiProperty({
		format: 'date-time',
		description: 'Parameter for date-time value deleting reservation',
		example: faker.date.past(),
	})
	@IsDate()
	deletedAt?: DateTime;
}
