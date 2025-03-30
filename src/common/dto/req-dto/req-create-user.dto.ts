import { IUser } from "../../entities";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ERole } from "@prisma/client";
import { IExcludeBasicProperties } from "../../interfaces";

export class ReqCreateUserDto implements Omit<IUser, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString({ message: "Consumer role value must be string" })
	@IsNotEmpty({ message: "Consumer role isn't must be empty" })
	consumerRole: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString({ message: "Username value must be string" })
	@IsNotEmpty({ message: "Username value isn't must be empty" })
	username: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.fullName(),
	})
	@IsString({ message: "Login must be string" })
	@IsEmpty()
	@IsOptional()
	login?: string;

	@ApiProperty({
		type: String,
		description: "Property user email",
		required: true,
		example: faker.internet.email(),
	})
	@IsString({ message: "Email must be string" })
	@IsNotEmpty()
	email: string;

	@ApiProperty({
		type: String,
		description: "Property user phone",
		required: false,
		example: faker.phone.number(),
	})
	@IsString({ message: "Phone must be string" })
	@IsEmpty()
	@IsOptional()
	phone?: string;

	@ApiProperty({
		type: String,
		description: 'Property user password',
		required: true,
		example: faker.internet.password({ length: 10 })
	})
	@IsString({ message: "Password must be string" })
	@IsNotEmpty({ message: "Password property is not be empty" })
	password: string;

	@ApiProperty({
		type: String,
		description: "Property role of user",
		default: ERole.client,
		enum: ERole,
		enumName: "ERole",
		required: true,
    example:
      ERole[
        faker.number.int({
          min: 1,
          max: Object.keys(ERole).length,
        })
      ],
    format: "enum",
    nullable: false,
	})
	@IsNotEmpty({ message: "Role is not be empty" })
	role: string;
}
