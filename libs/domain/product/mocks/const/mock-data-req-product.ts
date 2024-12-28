import { IProduct } from "../../../../shared/entity";
import { faker } from "@faker-js/faker";

export const MockDataReqProduct: Omit<IProduct, "id" | "createdAt" | "updatedAt" | "deletedAt"> = {
	name: 'Test name product',
	description: faker.lorem.text(),
	cost: 99999,
	compound: faker.lorem.text(),
	collectionId: faker.string.uuid(),
}
