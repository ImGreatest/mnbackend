import { ReqCreateReservationDto } from "../../dto/req/req-create-reservation.dto";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { ReqUpdateReservationDto } from "../../dto/req/req-update-reservation.dto";

export interface IMockReservationExamples  {
	summary: string;
	value: ReqCreateReservationDto | ReqUpdateReservationDto;
}

export const mockReqReservationDto: Record<string, IMockReservationExamples> = {
	firstExample: {
		summary: 'First example',
		value: {
			userId: faker.string.uuid(),
			bookStartTime: DateTime.fromJSDate(faker.date.past()),
			bookEndTime: DateTime.fromJSDate(faker.date.future()),
			comment: faker.lorem.sentence(),
		}
	},
	oneMoreExample: {
		summary: 'One more example',
		value: {
			userId: faker.string.uuid(),
			bookStartTime: DateTime.fromJSDate(faker.date.past()),
			bookEndTime: DateTime.fromJSDate(faker.date.future()),
			comment: faker.lorem.sentence(),
		}
	}
};
