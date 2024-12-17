import { TMockReqProduct } from "../../types/mock-req-product.type";
import { faker } from "@faker-js/faker";

export const MockReqProductDto: Record<string, TMockReqProduct> = {
	firstExample: {
		summary: 'First example',
		value: {
			name: faker.commerce.product(),
			description: faker.lorem.sentence(),
			cost: faker.number.int(),
			compound: faker.lorem.slug(),
		},
	},
	secondExample: {
		summary: 'Second Example',
		value: {
			name: faker.commerce.product(),
			description: faker.lorem.sentence(),
			cost: faker.number.int(),
			compound: faker.lorem.slug(),
		}
	}
};
