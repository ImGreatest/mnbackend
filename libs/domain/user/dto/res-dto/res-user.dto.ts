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
		example: faker.string.uuid(),
	})
	@IsString()
	/**
	 * Property id
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly id!: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.fullName(),
	})
	@IsString()
	/**
	 * Property login
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly login!: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.internet.email(),
	})
	@IsString()
	/**
	 * Property email
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly email!: string;

	@ApiProperty({
		type: String,
		required: true,
		example: String(faker.phone.number()),
	})
	@IsString()
	/**
	 * Property phone
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly phone!: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString()
	/**
	 * Property password
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly password!: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.firstName().toString(),
	})
	@IsString()
	/**
	 * Property firstname
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly firstname!: string;

	@ApiProperty({
		type: String,
		example: faker.person.middleName(),
	})
	@IsString()
	/**
	 * Property middleName
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly middleName!: string;

	@ApiProperty({
		type: String,
		required: true,
		example: faker.person.lastName(),
	})
	@IsString()
	/**
	 * Property lastname
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly lastname!: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString()
	/**
	 * Property address
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly address!: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString()
	/**
	 * Property alternateContact
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly alternateContact!: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	@IsString()
	/**
	 * Property role
	 *
	 * @readonly
	 * @requires
	 * @type { string }
	 */
	readonly role!: string;

	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property createdAt
	 *
	 * @readonly
	 * @requires
	 * @type { Date }
	 */
	readonly createdAt!: Date;

	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property updatedAt
	 *
	 * @readonly
	 * @requires
	 * @type { Date }
	 */
	readonly updatedAt!: Date;

	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		example: faker.date.past(),
	})
	@IsDate()
	/**
	 * Property deletedAt
	 *
	 * @readonly
	 * @requires
	 * @type { Date }
	 */
	readonly deletedAt!: Date;
}
