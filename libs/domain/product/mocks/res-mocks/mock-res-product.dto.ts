import { ResProductDto } from "../../dto/res-dto/res-product.dto";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

export const MockResProductDto: ResProductDto = {
	id: faker.string.uuid(),
	name: faker.commerce.product(),
	description: faker.lorem.sentence(),
	cost: faker.number.int(),
	compound: faker.lorem.slug(),
	createdAt: DateTime.fromJSDate(faker.date.past()),
	updatedAt: DateTime.fromJSDate(faker.date.past()),
	deletedAt: DateTime.fromJSDate(faker.date.past()),
};
