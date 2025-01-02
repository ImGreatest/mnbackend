import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IProduct } from "@entities";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateProductDto implements Omit<IProduct, keyof IExcludeBasicProperties> {
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
	desc?: string;

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
