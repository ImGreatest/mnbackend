import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { faker } from "@faker-js/faker";
import { ESize } from "../../enum/size.enum";

export class ResSizeDto {
	@ApiProperty({
		type: String,
		description: 'Name size',
		example: ESize[faker.number.int({
			min: 0,
			max: Object.keys(ESize).length,
		})],
	})
	@IsString()
	@IsOptional()
	name?: string;
}
