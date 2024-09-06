import { ReqCreateUserDto } from "../../dto/req-dto/req-create-user.dto";
import { ReqUpdateUserDto } from "../../dto/req-dto/req-update-user.dto";
import { faker } from "@faker-js/faker";
import { ERole } from ".prisma/client";

export interface IMockUserExamples {
	summary: string;
	value: ReqCreateUserDto | ReqUpdateUserDto;
}

export const mockReqUserDto: Record<string, IMockUserExamples> = {
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
			role: ERole.client,
		}
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
			role: ERole.client,
		}
	}
}
