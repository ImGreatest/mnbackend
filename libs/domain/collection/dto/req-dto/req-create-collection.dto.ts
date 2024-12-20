import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ReqCreateCollectionDto {
	@ApiProperty({
		type: String,
		description: 'Property of name collection',
	})
	@IsString()
	name: string;
}
