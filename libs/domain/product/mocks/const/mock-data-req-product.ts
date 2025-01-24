import { IProduct } from "../../../../shared/entity";
import { faker } from "@faker-js/faker";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export const MockDataReqProduct: Omit<IProduct, keyof IExcludeBasicProperties> =
  {
    name: "Test name product",
    desc: faker.lorem.text(),
    cost: 99999,
    compound: faker.lorem.text(),
    collectionId: faker.string.uuid(),
    categoryId: faker.string.uuid(),
  };
