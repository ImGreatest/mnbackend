import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsString } from "class-validator";
import { DateTime } from "luxon";

export class ReqCreateUserDto {
	@ApiProperty({
		required: false,
		description: '',
		example: faker.person.fullName(),
	})
	@IsString()
	login?: string;

	@ApiProperty({
		required: true,
		description: '',
		example: faker.internet.email(),
	})
	@IsString()
	email: string;

	@ApiProperty({
		required: false,
		description: '',
		example: faker.phone.number(),
	})
	@IsString()
	phone?: string;

	@ApiProperty({
		required: true,
		description: '',
		example: faker.internet.password({ length: 10 }),
	})
	@IsString()
	password: string;

	@ApiProperty({
		required: true,
		description: '',
		example: faker.person.firstName(),
	})
	@IsString()
	firstname: string;

	@ApiProperty({
		required: true,
		description: '',
		example: faker.person.middleName(),
	})
	@IsString()
	middleName: string;

	@ApiProperty({
		required: true,
		description: '',
		example: faker.person.lastName(),
	})
	@IsString()
	lastname: string;

	@ApiProperty({
		required: true,
		description: '',
	})
	@IsString()
	role: string;

	@ApiProperty({
		required: true,
		format: 'date-time',
		description: '',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	createdAt: DateTime;

	@ApiProperty({
		required: false,
		format: 'date-time',
		description: '',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	updatedAt?: DateTime;

	@ApiProperty({
		required: false,
		format: 'date-time',
		description: '',
		example: DateTime.fromJSDate(faker.date.past()),
	})
	@IsDate()
	deletedAt?: DateTime;
}
