import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsNumber, IsString } from "class-validator";

export class ResProductDto {
	@ApiProperty({
		type: String,
		description: 'Identifier product',
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		type: String,
		description: 'Namely of product',
		example: faker.commerce.product(),
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: String,
		description: 'Attribute description product',
		example: faker.lorem.sentence(),
	})
	@IsString()
	description?: string;

	@ApiProperty({
		type: Number,
		description: 'Cost product',
		example: faker.number.int(),
	})
	@IsNumber()
	cost: number;

	@ApiProperty({
		type: String,
		description: 'Description product compound',
		example: faker.lorem.slug(),
	})
	@IsString()
	compound: string;
}
