import { ReqCreateNotificationDto } from "../../dto/req-dto/req-create-notification.dto";
import { faker } from "@faker-js/faker";

export const MockDataReqNotification: ReqCreateNotificationDto = {
	userId: faker.string.uuid(),
	templateId: faker.string.uuid(),
}
