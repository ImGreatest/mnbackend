import { ReqCreateBonusAccountDto } from "../../dto/req-create-bonus-account.dto";
import { faker } from "@faker-js/faker";

export const MockDataReqCreateBonusAccount: ReqCreateBonusAccountDto = {
  userId: faker.string.uuid(),
  percentage: faker.number.int({ min: 0, max: 200 }),
  bonusValue: faker.number.int({ min: 0 }),
  startValue: faker.number.int({ min: 0 }),
};
