import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from 'class-validator';
import { faker } from "@faker-js/faker";

/**
 * Class describing the returns order properties of the user instance
 *
 * @export
 * @class ResUserDto
 * @property id
 * @property login
 * @property email
 * @property phone
 * @property password
 * @property firstname
 * @property middleName
 * @property lastname
 * @property address
 * @property alternateContact
 * @property role
 * @property createdAt
 * @property updatedAt
 * @property deletedAt
 */
export class ResUserDto {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property id user',
		example: faker.string.uuid(),
	})
	@IsString()
	/**
	 * Property identifier user
	 *
	 * @requires
	 * @type { string }
	 */
	id: string;

	@ApiProperty({
		type: String,
		description: 'Property login user',
		required: true,
		example: faker.person.fullName(),
	})
	@IsString()
	/**
	 * Property login
	 *
	 * @type { string }
	 * @requires
	 */
	login: string;

	@ApiProperty({
		type: String,
		description: 'Property email user',
		required: true,
		example: faker.internet.email(),
	})
	@IsString()
	/**
	 * Property email
	 *
	 * @type { string }
	 * @requires
	 */
	email: string;

	@ApiProperty({
		type: String,
		description: 'Property phone user',
		required: true,
		example: String(faker.phone.number()),
	})
	@IsString()
	/**
	 * Property phone
	 *
	 * @type { string }
	 * @requires
	 */
	phone: string;

	@ApiProperty({
		type: String,
		description: 'Property password user',
		required: true,
	})
	@IsString()
	/**
	 * Property password
	 *
	 * @type { string }
	 */
	password: string;

	@ApiProperty({
		type: String,
		description: 'Property firstname user',
		example: faker.person.firstName().toString(),
	})
	@IsString()
	/**
	 * Property firstname
	 *
	 * @type { string }
	 */
	firstname: string;

	@ApiProperty({
		type: String,
		description: 'Property middlename user',
		example: faker.person.middleName(),
	})
	@IsString()
	/**
	 * Property middleName
	 *
	 * @type { string }
	 */
	middleName: string;

	@ApiProperty({
		type: String,
		description: 'Property lastname user',
		example: faker.person.lastName(),
	})
	@IsString()
	/**
	 * Property lastname
	 *
	 * @type { string }
	 */
	lastname: string;

	@ApiProperty({
		type: String,
		description: 'Property address user',
	})
	@IsString()
	/**
	 * Property address
	 *
	 * @type { string }
	 */
	address: string;

	@ApiProperty({
		type: String,
		description: 'Property alternate contact information user',
	})
	@IsString()
	/**
	 * Property alternateContact
	 *
	 * @type { string }
	 */
	alternateContact: string;

	@ApiProperty({
		type: String,
		description: 'Property role user',
	})
	@IsString()
	/**
	 * Property role
	 *
	 * @type { string }
	 */
	role: string;

	@ApiProperty({
		type: Date,
		description: 'Property of date-time creating user',
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property createdAt
	 *
	 * @type { Date }
	 */
	createdAt: Date;

	@ApiProperty({
		type: Date,
		description: 'Property of date-time last updating user',
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property updatedAt
	 *
	 * @type { Date }
	 */
	readonly updatedAt!: Date;

	@ApiProperty({
		type: Date,
		description: 'Property of date-time deleting user',
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property deletedAt
	 *
	 * @type { Date }
	 */
	deletedAt: Date;
}
