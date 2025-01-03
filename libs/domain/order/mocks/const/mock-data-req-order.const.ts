import { ReqCreateOrderDto } from "../../dto/req-dto/req-create-order.dto";
import { faker } from "@faker-js/faker";
import { Decimal } from "@prisma/client/runtime/library";
import { EOrderStatus } from "@prisma/client";

export const MockDataReqOrder: ReqCreateOrderDto = {
	dateDelivery: faker.date.future(),
	cost: new Decimal(faker.number.int({
		min: 0,
		max: 9999,
	})),
	status: EOrderStatus[faker.number.int({
		min: 0,
		max: Object.keys(EOrderStatus).length - 1,
	})],
	comment: faker.lorem.lines(1),
}
