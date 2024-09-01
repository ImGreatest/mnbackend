import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from 'class-validator';
import { DateTime } from "luxon";

export class ResUserDto {
	@ApiProperty()
	@IsString()
	identifier: string;

	@ApiProperty()
	@IsString()
	login: string;

	@ApiProperty()
	@IsString()
	email: string;

	@ApiProperty()
	@IsString()
	phone: string;

	@ApiProperty()
	@IsString()
	password: string;

	@ApiProperty()
	@IsString()
	firstName: string;

	@ApiProperty()
	@IsString()
	middleName: string;

	@ApiProperty()
	@IsString()
	lastname: string;

	@ApiProperty()
	@IsString()
	role: string;

	@ApiProperty()
	@IsDate()
	createdAt: DateTime;

	@ApiProperty()
	@IsDate()
	updatedAt: DateTime;

	@ApiProperty()
	@IsDate()
	deletedAt: DateTime;
}
