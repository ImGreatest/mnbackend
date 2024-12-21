import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ICollection } from "@entities";

export class ReqCreateCollectionDto implements Omit<ICollection, "id" | "createdAt" | "updatedAt" | "deletedAt"> {
	@ApiProperty({
		type: String,
		description: 'Property of name collection',
	})
	@IsString()
	name: string;
}
