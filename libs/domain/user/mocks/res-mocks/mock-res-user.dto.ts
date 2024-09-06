import { ResUserDto } from "../../dto/res-dto/res-user.dto";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

export const mockResUserDto: ResUserDto = {
	id: faker.string.uuid(),
	login: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	password: faker.internet.password({ length: 10 }),
	firstname: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	address: faker.location.country() + faker.location.city() + faker.location.streetAddress(),
	alternateContact: faker.phone.number(),
	role: faker.person.jobTitle(),
	createdAt: faker.date.past(),
	updatedAt: faker.date.past(),
	deletedAt: faker.date.past(),
}
