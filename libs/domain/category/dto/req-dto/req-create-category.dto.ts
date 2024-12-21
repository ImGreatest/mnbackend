import { ICategory } from "@entities";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqCreateCategoryDto implements Omit<ICategory, "id" | "createdAt" | "updatedAt" | "deletedAt"> {
	@ApiProperty({
		type: String,
		required: true,
		description: "Property for name category",
	})
	@IsString()
	name: string;
}
