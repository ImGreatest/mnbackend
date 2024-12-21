import { TMockReqProductExample } from "../../types/mock-req-product-example.type";
import { faker } from "@faker-js/faker";

export const MockReqCreateProductDto: Record<string, TMockReqProductExample> = {
	firstExample: {
		summary: 'First example',
		value: {
			name: faker.commerce.product(),
			description: faker.lorem.sentence(),
			cost: faker.number.int(),
			compound: faker.lorem.slug(),
			collectionId: faker.string.uuid(),
		},
	},
	secondExample: {
		summary: 'Second Example',
		value: {
			name: faker.commerce.product(),
			description: faker.lorem.sentence(),
			cost: faker.number.int(),
			compound: faker.lorem.slug(),
			collectionId: faker.string.uuid(),
		}
	}
};
