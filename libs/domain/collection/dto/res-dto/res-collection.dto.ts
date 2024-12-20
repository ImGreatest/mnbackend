import { ICollection } from "../../../../shared/entity";
import { DateTime } from "luxon";
import { IsDate, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

export class ResCollectionDto implements ICollection {
	@ApiProperty({
		type: String,
		description: 'Property of identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		type: String,
		description: 'Property of name collection',
	})
	name: string;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value creating product',
		example: faker.date.past(),
	})
	@IsDate()
	createdAt: Date;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value last updating product',
		example: faker.date.past(),
	})
	@IsDate()
	updatedAt?: Date;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value deleting product',
		example: faker.date.past(),
	})
	@IsDate()
	deletedAt?: Date;
}
