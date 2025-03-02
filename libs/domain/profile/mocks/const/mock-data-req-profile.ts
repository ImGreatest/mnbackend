import { faker } from "@faker-js/faker";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
import { IProfile } from "../../../../shared/entity";

/**
 * @export
 * @const { MockDataReqProfile }
 * @name MockDataReqProfile
 * @see { IProfile, IExcludeBasicProperties }
 */
export const MockDataReqProfile: Omit<IProfile, keyof IExcludeBasicProperties> = {
	userId: faker.string.uuid(),
	firstname: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastname: faker.person.lastName(),
	address: faker.location.streetAddress(),
	alternateContact: faker.internet.email() || faker.phone.number(),
}
