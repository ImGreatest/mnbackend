import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class ResUpdatedUserDto {
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
	secondName: string;

	@ApiProperty()
	@IsDate()
	createdAt: Date;

	@ApiProperty()
	@IsDate()
	updatedAt: Date;

	@ApiProperty()
	@IsDate()
	deletedAt: Date;
}
