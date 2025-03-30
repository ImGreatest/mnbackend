import { IUser } from "../../entities";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsString } from "class-validator";
import { ERole } from "@prisma/client";

export class ResUserDto implements IUser {
	@ApiProperty({
		type: String,
		description: "Property identifier user",
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		type: String,
		description: "Property username",
	})
	@IsString()
	username: string;

	@ApiProperty({
		type: String,
		description: "Property login user",
		example: faker.person.fullName(),
	})
	@IsString()
	login: string;

	@ApiProperty({
		type: String,
		description: "Property email user",
		example: faker.internet.email(),
	})
	@IsString()
	email: string;

	@ApiProperty({
		type: String,
		description: "Property phone user",
		example: String(faker.phone.number()),
	})
	@IsString()
	phone: string;

	@ApiProperty({
		type: String,
		description: "Property password user",
	})
	@IsString()
	password: string;

	@ApiProperty({
		type: String,
		description: "Property role user",
		example: ERole[
			faker.number.int({
				min: 0,
				max: Object.keys(ERole).length,
			})
			]
	})
	@IsString()
	role: string;

	@ApiProperty({
		type: Date,
    description: "Property of date-time creating user",
		format: 'date-time',
		example: faker.date.past(),
	})
	createdAt: Date;

	@ApiProperty({
		type: Date,
    description: "Property of date-time last updating user",
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	updatedAt: Date;
}
