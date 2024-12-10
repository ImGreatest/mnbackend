import { faker } from "@faker-js/faker";
import { TMockReqUserExample } from "../../types/mock-req-user-example.type";
import { ERole } from "../../../../shared/enum/role.enum";

export const mockReqUserDto: Record<string, TMockReqUserExample> = {
	firstExample: {
		summary: 'First example',
		value: {
			login: faker.person.fullName(),
			email: faker.internet.email(),
			phone: faker.phone.number(),
			password: faker.internet.password({ length: 10 }),
			firstname: faker.person.firstName(),
			middleName: faker.person.middleName(),
			lastname: faker.person.lastName(),
			address: faker.location.streetAddress(),
			alternateContact: faker.phone.number() || faker.internet.email(),
			role: ERole.client,
		},
	},
	oneMoreExample: {
		summary: 'One more example',
		value: {
			login: faker.person.fullName(),
			email: faker.internet.email(),
			phone: faker.phone.number(),
			password: faker.internet.password({ length: 10 }),
			firstname: faker.person.firstName(),
			middleName: faker.person.middleName(),
			lastname: faker.person.lastName(),
			address: faker.location.streetAddress(),
			alternateContact: faker.phone.number() || faker.internet.email(),
			role: ERole.client,
		},
	},
}
