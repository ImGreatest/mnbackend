import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { faker } from "@faker-js/faker";
import { ESize } from "../../enum/size.enum";

export class ResSizeDto {
	@ApiProperty({
		type: String,
		description: 'Name size',
		example: faker.number.int({
			min: 0,
			max: Object.keys(ESize).length,
		}),
	})
	@IsString()
	name: string;
}
