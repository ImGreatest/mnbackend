import { IFavorite } from "../../../../shared/entity/favorite.entity";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsString } from "class-validator";

export class ReqCreateRelationDto implements Omit<IFavorite, "id" | "createdAt" | "updatedAt" | "deletedAt"> {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of identifier user',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of identifier product',
		example: faker.string.uuid(),
	})
	@IsString()
	productId: string;
}
