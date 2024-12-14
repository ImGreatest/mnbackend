import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { TMockReqCreateReservationExample } from "../../types/mock-req-create-reservation-example.type";
import { ReqCreateReservationDto } from "../../dto/req-dto/req-create-reservation.dto";

export const mockDataReqReservationDto: ReqCreateReservationDto = {
	userId: faker.string.uuid(),
	bookStartTime: DateTime.fromJSDate(faker.date.past()),
	bookEndTime: DateTime.fromJSDate(faker.date.future()),
	comment: faker.lorem.sentence(),
}

export const MockReqReservationDto: Record<string, TMockReqCreateReservationExample> = {
	firstExample: {
		summary: 'First example',
		value: {
			...mockDataReqReservationDto,
		},
	},
	secondExample: {
		summary: 'Second Example',
		value: {
			...mockDataReqReservationDto,
		},
	},
};
