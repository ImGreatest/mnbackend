import { ResSizeDto } from "../dto/res-dto/res-size.dto";
import { faker } from "@faker-js/faker";
import { ESize } from "../enum/size.enum";

export const MockResSizesDto: ResSizeDto = {
	name: ESize[faker.number.int({
		min: 0,
		max: Object.keys(ESize).length,
	})],
}
