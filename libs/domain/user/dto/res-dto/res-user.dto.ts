import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from 'class-validator';
import { DateTime } from "luxon";
import { faker } from "@faker-js/faker";

export class ResUserDto {
	@ApiProperty({
		type: String,
		example: faker.string.uuid(),
	})
	@IsString()
	identifier: string;

	@ApiProperty({
		type: String,
		example: faker.person.fullName(),
	})
	@IsString()
	login: string;

	@ApiProperty({
		type: String,
		example: faker.internet.email(),
	})
	@IsString()
	email: string;

	@ApiProperty({
		type: String,
		example: faker.phone.number(),
	})
	@IsString()
	phone: string;

	@ApiProperty({
		type: String,
	})
	@IsString()
	password: string;

	@ApiProperty({
		type: String,
		example: faker.person.firstName(),
	})
	@IsString()
	firstName: string;

	@ApiProperty({
		type: String,
		example: faker.person.middleName(),
	})
	@IsString()
	middleName: string;

	@ApiProperty({
		type: String,
		example: faker.person.lastName(),
	})
	@IsString()
	lastname: string;

	@ApiProperty({
		type: String,
	})
	@IsString()
	role: string;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	createdAt: DateTime;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	updatedAt: DateTime;

	@ApiProperty({
		type: DateTime,
		format: 'date-time',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	deletedAt: DateTime;
}
