import { IUser } from "@entities";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { ERole } from "@enums";

export const MockDataResUser: IUser = {
	id: faker.string.uuid(),
	login: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	password: faker.internet.password({ length: 10 }),
	firstname: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	address: faker.location.country() + faker.location.city() + faker.location.streetAddress(),
	alternateContact: faker.phone.number() || faker.internet.email(),
	role: ERole[faker.number.int({
		min: 1,
		max: Object.keys(ERole).length,
	})],
	createdAt: DateTime.fromJSDate(faker.date.past()),
	updatedAt: DateTime.fromJSDate(faker.date.past()),
	deletedAt: DateTime.fromJSDate(faker.date.past()),
}
