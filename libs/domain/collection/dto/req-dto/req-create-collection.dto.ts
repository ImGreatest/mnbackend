import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ICollection } from "../../../../shared/entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateCollectionDto implements Omit<ICollection, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of name collection',
	})
	@IsString()
	name: string;
}
