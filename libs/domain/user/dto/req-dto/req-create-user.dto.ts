import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsString } from "class-validator";

export class ReqCreateUserDto {
	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.fullName(),
	})
	@IsString()
	login?: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.internet.email(),
	})
	@IsString()
	email: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.phone.number(),
	})
	@IsString()
	phone?: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.internet.password({ length: 10 }),
	})
	@IsString()
	password: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.firstName(),
	})
	@IsString()
	firstname: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.middleName(),
	})
	@IsString()
	middleName: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.lastName(),
	})
	@IsString()
	lastname: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString()
	role: string;
}
