import { ResUserDto } from "../../dto/res-dto/res-user.dto";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

export const mockResUserDto: ResUserDto = {
	identifier: faker.string.uuid(),
	login: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	password: faker.internet.password({ length: 10 }),
	firstName: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	role: faker.person.jobTitle(),
	createdAt: DateTime.fromJSDate(faker.date.past()),
	updatedAt: DateTime.fromJSDate(faker.date.past()),
	deletedAt: DateTime.fromJSDate(faker.date.past()),
}
