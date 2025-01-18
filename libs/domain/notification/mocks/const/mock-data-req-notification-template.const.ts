import { ReqCreateNotificationTemplateDto } from "../../dto/req-dto/req-create-notification-template.dto";
import { faker } from "@faker-js/faker";
import { ENotificationType } from "@prisma/client";

export const MockDataReqNotificationTemplate: ReqCreateNotificationTemplateDto = {
	title: faker.lorem.word(),
	description: faker.lorem.lines(1),
	type: ENotificationType[faker.number.int({
		min: 0,
		max: Object.keys(ENotificationType).length,
	})],
}
