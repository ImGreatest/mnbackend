import { ResProductDto } from "../../dto/res-dto/res-product.dto";
import { faker } from "@faker-js/faker";

export const MockResProductDto: ResProductDto = {
	id: faker.string.uuid(),
	name: faker.commerce.product(),
	description: faker.lorem.sentence(),
	cost: faker.number.int(),
	compound: faker.lorem.slug(),
	collectionId: faker.string.uuid(),
	createdAt: faker.date.past(),
	updatedAt: faker.date.past(),
	deletedAt: faker.date.past(),
}
