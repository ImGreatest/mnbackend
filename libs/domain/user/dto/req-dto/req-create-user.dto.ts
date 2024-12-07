import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsAlpha, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ERole } from "../../../../shared/enum/role.enum";

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
	 * @readonly
	 * @type { string }
	 */
	readonly login?: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.internet.email(),
	})
	@IsString({ message: 'Email must be string' })
	@IsNotEmpty()
	/**
	 * Property email
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly email: string;

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
	 * @readonly
	 * @type { string }
	 */
	readonly phone?: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.internet.password({ length: 10 }),
	})
	@IsString({ message: 'Password must be string' })
	@IsNotEmpty()
	/**
	 * Property password
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly password: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.firstName(),
	})
	@IsString({ message: 'Firstname must be string' })
	@IsAlpha()
	@IsEmpty()
	@IsOptional()
	/**
	 * Property firstname
	 *
	 * @readonly
	 * @type { string }
	 */
	readonly firstname?: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.middleName(),
	})
	@IsString({ message: 'MiddleName must be string' })
	@IsAlpha()
	@IsEmpty()
	@IsOptional()
	/**
	 * Property middleName
	 *
	 * @readonly
	 * @type { string }
	 */
	readonly middleName?: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.person.lastName(),
	})
	@IsString({ message: 'Lastname must be string' })
	@IsAlpha()
	@IsEmpty()
	@MaxLength(255)
	@IsOptional()
	/**
	 * Property lastname
	 *
	 * @readonly
	 * @type { string }
	 */
	readonly lastname?: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.location.country() + faker.location.city() + faker.location.streetAddress(),
	})
	@IsString({ message: 'Address must be string' })
	@MaxLength(255, { message: 'Max length address 255 letters' })
	@MinLength(5, { message: 'Min length address 5 letters' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property address
	 *
	 * @readonly
	 * @type { string }
	 */
	readonly address?: string;

	@ApiProperty({
		type: String,
		required: false,
		example: faker.phone.number(),
	})
	@IsString({ message: 'Alternate address must be string' })
	@MaxLength(255, { message: 'Max length is 255 letters' })
	@MinLength(5, { message: 'Min length is 5 letters' })
	@IsEmpty()
	@IsOptional()
	/**
	 * Property alternateContact
	 *
	 * @readonly
	 * @type { string }
	 */
	readonly alternateContact?: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsEnum(ERole)
	@IsNotEmpty()
	/**
	 * Property role
	 *
	 * @readonly
	 * @type { ERole }
	 */
	readonly role: ERole;
}
