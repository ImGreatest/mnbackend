import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IProduct } from "@entities";

export class ReqCreateProductDto implements Omit<IProduct, "id" | "createdAt" | "updatedAt" | "deletedAt"> {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Namely of product',
		example: faker.commerce.product(),
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: String,
		required: false,
		description: 'Property of description product',
		example: faker.lorem.sentence(),
	})
	@IsString()
	description?: string;

	@ApiProperty({
		type: Number,
		required: true,
		description: 'Cost product',
		example: faker.number.int(),
	})
	@IsNumber()
	cost: number;

	@ApiProperty({
		type: String,
		required: true,
		description: 'Description product compound',
		example: faker.lorem.slug(),
	})
	@IsString()
	compound: string;

	@ApiProperty({
		type: String,
		required: true,
		description: 'Property for identifier collection to refer product',
		example: faker.string.uuid(),
	})
	@IsString()
	collectionId: string;
}
