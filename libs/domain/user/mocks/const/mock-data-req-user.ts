import { ReqCreateUserDto } from "../../dto/req-dto/req-create-user.dto";
import { faker } from "@faker-js/faker";
import { ERole } from "@enums";
import { IUser } from "@entities";

export const MockDataReqUser: Omit<IUser, "id" | "createdAt" | "updatedAt" | "deletedAt"> = {
	login: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	password: faker.internet.password({ length: 10 }),
	firstname: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	address: faker.location.streetAddress(),
	alternateContact: faker.phone.number() || faker.internet.email(),
	role: ERole[faker.number.int({
		min: 1,
		max: Object.keys(ERole).length,
	})],
}
