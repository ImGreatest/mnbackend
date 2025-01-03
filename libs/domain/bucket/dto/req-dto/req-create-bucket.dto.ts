import { IBucket } from "../../../../shared/entity/bucket.entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsString } from "class-validator";

export class ReqCreateBucketDto implements Omit<IBucket, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of user identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of product identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	productId: string;
}
