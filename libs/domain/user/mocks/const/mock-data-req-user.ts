import { faker } from "@faker-js/faker";
import { ERole } from "@prisma/client";
import { IUser } from "../../../../shared/entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

/**
 * @export
 * @const
 * @name MockDataReqUser
 * @see { IUser, IExcludeBasicProperties, ERole }
 */
export const MockDataReqUser: Omit<IUser, keyof IExcludeBasicProperties> = {
  login: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  password: faker.internet.password({ length: 10 }),
  // firstname: faker.person.firstName(),
  // middleName: faker.person.middleName(),
  // lastname: faker.person.lastName(),
  // address: faker.location.streetAddress(),
  // alternateContact: faker.phone.number() || faker.internet.email(),
  role: ERole[
    faker.number.int({
      min: 1,
      max: Object.keys(ERole).length,
    })
  ],
};
