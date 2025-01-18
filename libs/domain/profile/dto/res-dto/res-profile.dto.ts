import { IProfile } from "libs/shared/entity/profile.entity";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsString } from "class-validator";

/**
 * Class describing the returns order properties of the profile instance
 *
 * @export
 * @class ResProfileDto
 * @property userId
 * @property firstname
 * @property middleName
 * @property lastname
 * @property address
 * @property alternateContact
 * @property createdAt
 * @property updatedAt
 * @see { IProfile }
 */
export class ResProfileDto implements IProfile {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property id profile',
		example: faker.string.uuid(),
	})
	@IsString()
	/**
	 * Property of identifier user profile
	 *
	 * @requires
	 * @type { string }
	 */
	userId: string;

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
	 updatedAt: Date;
}
