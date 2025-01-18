import { IUser } from "../../../../shared/entity";
import { faker } from "@faker-js/faker";
import { ERole } from "../../../../shared/enum";

export const MockDataResUser: IUser = {
	id: faker.string.uuid(),
	login: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	password: faker.internet.password({ length: 10 }),
	// firstname: faker.person.firstName(),
	// middleName: faker.person.middleName(),
	// lastname: faker.person.lastName(),
	// address: faker.location.country() + faker.location.city() + faker.location.streetAddress(),
	// alternateContact: faker.phone.number() || faker.internet.email(),
	role: ERole[faker.number.int({
		min: 1,
		max: Object.keys(ERole).length,
	})],
	createdAt: faker.date.past(),
	updatedAt: faker.date.past(),
}
