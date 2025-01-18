import { ApiProperty } from "@nestjs/swagger";
import { IsUrl } from "class-validator";

export class ResFileDto {
	@ApiProperty({
		type: URL,
		description: 'Property of url value',
		example: 'http://example.com/api',
	})
	@IsUrl()
	url: string;
}