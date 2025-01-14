import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { ESize } from "../../enum/size.enum";
import { IsString } from "class-validator";
import { ISize } from "../../../../shared/entity";

export class ResSizeDto implements ISize {
	@ApiProperty({
		type: String,
		description: 'Property name of size',
		example: ESize[faker.number.int({
			min: 0,
			max: Object.keys(ESize).length,
		})],
	})
	@IsString()
	name: string;
}
