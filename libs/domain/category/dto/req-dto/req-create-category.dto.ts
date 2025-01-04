import { ICategory } from "../../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateCategoryDto implements Omit<ICategory, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: String,
		required: true,
		description: "Property for name category",
	})
	@IsString()
	name: string;
}
