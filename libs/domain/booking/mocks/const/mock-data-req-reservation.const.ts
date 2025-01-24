import { ReqCreateReservationDto } from "../../dto/req-dto/req-create-reservation.dto";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

export const MockDataReqReservation: ReqCreateReservationDto = {
  userId: faker.string.uuid(),
  bookStartTime: DateTime.fromJSDate(faker.date.past()),
  bookEndTime: DateTime.fromJSDate(faker.date.future()),
  comment: faker.lorem.sentence(),
};
