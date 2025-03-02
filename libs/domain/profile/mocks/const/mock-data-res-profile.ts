import { IProfile } from "../../../../shared/entity";
import { faker } from "@faker-js/faker";

/**
 * @export
 * @const
 * @see { IProfile }
 */
export const MockDataResProfile: IProfile = {
	userId: faker.string.uuid(),
	firstname: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	address: faker.location.streetAddress(),
	alternateContact: faker.internet.email() || faker.phone.number(),
	createdAt: faker.date.past(),
	updatedAt: new Date(),
}
