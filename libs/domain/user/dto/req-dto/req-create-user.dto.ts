import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsAlpha, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ERole } from "../../../../shared/enum";

/**
 * Class describing the properties sent to create user instance
 *
 * @export
 * @class ReqCreateUserDto
 * @property { string } login
 * @property { string } email
 * @property { string } phone
 * @property { string } password
 * @property { string } firstname
 * @property { string } middleName
 * @property { string } lastname
 * @property { string } address
 * @property { string } alternateContact
 * @property { ERole } role
 */
export class ReqCreateUserDto {
	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.fullName(),
	})
	@IsString({ message: 'Login must be string' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property login
	 *
	 * @type { string }
	 * @optional
	 */
	login?: string;

	@ApiProperty({
		type: String,
		description: 'Property for email user',
		required: true,
		example: faker.internet.email(),
	})
	@IsString({ message: 'Email must be string' })
	@IsNotEmpty()
	/**
	 * Property email
	 *
	 * @type { string }
	 * @requires
	 */
	email: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.phone.number(),
	})
	@IsString({ message: 'Phone must be string' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property phone
	 *
	 * @type { string }
	 * @optional
	 */
	phone?: string;

	@ApiProperty({
		type: String,
		description: 'Property for password user',
		required: true,
		example: faker.internet.password({ length: 10 }),
	})
	@IsString({ message: 'Password must be string' })
	@IsNotEmpty()
	/**
	 * Property password
	 *
	 * @type { string }
	 * @requires
	 */
	password: string;

	@ApiProperty({
		type: String,
		description: 'Property for firstname user',
		required: false,
		example: faker.person.firstName(),
	})
	@IsString({ message: 'Firstname must be string' })
	@IsAlpha()
	@IsEmpty()
	@IsOptional()
	/**
	 * Property firstname user
	 *
	 * @type { string }
	 * @optional
	 */
	firstname?: string;

	@ApiProperty({
		type: String,
		description: 'Property for middlename user',
		required: false,
		example: faker.person.middleName(),
	})
	@IsString({ message: 'MiddleName must be string' })
	@IsAlpha()
	@IsEmpty()
	@IsOptional()
	/**
	 * Property middleName user
	 *
	 * @type { string }
	 * @optional
	 */
	middleName?: string;

	@ApiProperty({
		type: String,
		description: 'Property for lastname user',
		required: false,
		example: faker.person.lastName(),
	})
	@IsString({ message: 'Lastname must be string' })
	@IsAlpha()
	@IsEmpty()
	@MaxLength(255)
	@IsOptional()
	/**
	 * Property lastname user
	 *
	 * @type { string }
	 * @optional
	 */
	lastname?: string;

	@ApiProperty({
		type: String,
		description: 'Property address user',
		required: false,
		example: faker.location.country() + faker.location.city() + faker.location.streetAddress(),
	})
	@IsString({ message: 'Address must be string' })
	@MaxLength(255, { message: 'Max length address 255 letters' })
	@MinLength(5, { message: 'Min length address 5 letters' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property active address of user
	 *
	 * @type { string }
	 * @optional
	 */
	address?: string;

	@ApiProperty({
		type: String,
		description: 'Property for alternate contact information user',
		required: false,
		example: faker.phone.number(),
	})
	@IsString({ message: 'Alternate address must be string' })
	@MaxLength(255, { message: 'Max length is 255 letters' })
	@MinLength(5, { message: 'Min length is 5 letters' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property alternate contact of user
	 *
	 * @type { string }
	 * @optional
	 */
	alternateContact?: string;

	@ApiProperty({
		type: String,
		description: 'Property of role user in the system',
		default: ERole.client,
		enum: ERole,
		enumName: "ERole",
		required: true,
		example: ERole[faker.number.int({
			min: 1,
			max: Object.keys(ERole).length,
		})],
		format: 'enum',
		nullable: false,
	})
	@IsEnum(ERole)
	@IsNotEmpty()
	/**
	 * Represents the role of the user in the system.
	 *
	 * @type { ERole }
	 * @requires
	 */
	role: ERole;
}
