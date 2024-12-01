import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { SizeService } from "../../../libs/domain/size/size.service";
import { faker } from "@faker-js/faker";
import { ESize } from "../../../libs/domain/size/enum/size.enum";
import { ResSizeDto } from "../../../libs/domain/size/dto/res-dto/res-size.dto";

@ApiTags('size')
@ApiBearerAuth()
@Controller('size')
export class SizeController {
	constructor(private readonly sizeService: SizeService) {}

	@Get('size')
	@ApiQuery({
		name: 'name',
		type: String,
		required: false,
		example: ESize[faker.number.int({
			min: 0,
			max: Object.keys(ESize).length,
		})],
	})
	getSize(name?: string): Promise<ResSizeDto[]> {
		return this.sizeService.getSize(name);
	}
}
