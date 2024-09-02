import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { TMockReqCreateReservationExample } from "../../types/mock-req-create-reservation-example.type";

export const MockReqReservationDto: Record<string, TMockReqCreateReservationExample> = {
	firstExample: {
		summary: 'First example',
		value: {
			userId: faker.string.uuid(),
			bookStartTime: DateTime.fromJSDate(faker.date.past()),
			bookEndTime: DateTime.fromJSDate(faker.date.future()),
			comment: faker.lorem.sentence(),
		}
	},
	secondExample: {
		summary: 'secondExample',
		value: {
			userId: faker.string.uuid(),
			bookStartTime: DateTime.fromJSDate(faker.date.past()),
			bookEndTime: DateTime.fromJSDate(faker.date.future()),
			comment: faker.lorem.sentence(),
		}
	}
};
