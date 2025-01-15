import { IExcludeBasicProperties } from "../../../../libs/shared/interfaces/exclude-basic-properties.interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { faker } from "@faker-js/faker";
import { ERole } from "@prisma/client";
import { IUser } from "../../../../libs/shared/entity";

export class ReqSignUpDto implements Omit<IUser, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: String,
		required: false,
		description: 'Property login user',
	})
	@IsOptional()
	@IsString({ message: "Property value must be string" })
	login?: string;

	@ApiProperty({
		type: String,
		required: false,
		description: "Property of email user",
		example: faker.internet.email(),
	})
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@ApiProperty({
		type: String,
		required: false,
		description: "Property of phone number user",
		example: faker.phone.number().toString(),
	})
	@IsOptional()
	@IsPhoneNumber()
	@IsString({ message: "Property value must be string" })
	phone?: string;

	@ApiProperty({
		type: String,
		required: true,
		description: "Property password",
	})
	@IsNotEmpty({ message: "Property is required" })
	@IsString()
	password: string;

	@ApiProperty({
		type: String,
		description: "Property of firstname user",
		required: false,
		example: faker.person.firstName(),
	})
	@IsOptional()
	@IsString({ message: 'Property value must be string' })
	firstname?: string;

	@ApiProperty({
		type: String,
		description: "Property of middlename user",
		required: false,
		example: faker.person.middleName(),
	})
	@IsOptional()
	@IsString({ message: 'Property value must be string' })
	middleName?: string;

	@ApiProperty({
		type: String,
		description: 'Property of lastname user',
		required: false,
		example: faker.person.lastName(),
	})
	@IsOptional()
	@IsString({ message: 'Property value must be string' })
	lastname?: string;

	@ApiProperty({
		type: String,
		required: false,
		description: 'Property of address user',
		example: faker.location.streetAddress(),
	})
	@IsOptional()
	@IsString({ message: "Property must be string" })
	address?: string;

	@ApiProperty({
		type: String,
		required: false,
		description: "Property of alternate contact user",
	})
	@IsOptional()
	@IsString({ message: "Property must be string" })
	alternateContact?: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsEnum(ERole)
	role: ERole;

	@ApiProperty()
	@IsString()
	@IsNotEmpty({ message: "Device identifier is required" })
	deviceId: string;
}
