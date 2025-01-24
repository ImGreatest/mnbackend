import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { ResReservationDto } from "../../dto/res-dto/res-reservation.dto";

export const MockResReservationDto: ResReservationDto = {
  id: faker.string.uuid(),
  userId: faker.string.uuid(),
  bookStartTime: DateTime.fromJSDate(faker.date.past()),
  bookEndTime: DateTime.fromJSDate(faker.date.future()),
  comment: faker.lorem.sentence(),
  createdAt: DateTime.fromJSDate(faker.date.past()),
  updatedAt: DateTime.fromJSDate(faker.date.past()),
  deletedAt: DateTime.fromJSDate(faker.date.past()),
};
