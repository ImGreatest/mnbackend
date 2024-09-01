import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { ResUpdatedReservationDto } from "../../dto/res-dto/res-updated-reservation.dto";

export const mockResUpdatedReservationDto: ResUpdatedReservationDto = {
	userId: faker.string.uuid(),
	bookStartTime: DateTime.fromJSDate(faker.date.past()),
	bookEndTime: DateTime.fromJSDate(faker.date.past()),
	comment: faker.lorem.sentence(),
	createdAt: DateTime.fromJSDate(faker.date.past()),
	updatedAt: DateTime.fromJSDate(faker.date.past()),
	deletedAt: DateTime.fromJSDate(faker.date.past()),
}
