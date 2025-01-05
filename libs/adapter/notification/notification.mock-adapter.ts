import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../../domain/notification/repository/notification.repository";
import { logger } from "../../../logger/logger";
import { ReqCreateNotificationDto } from "../../domain/notification/dto/req-dto/req-create-notification.dto";
import { ResNotificationDto } from "../../domain/notification/dto/res-dto/res-notification.dto";
import { ResNotificationsDto } from "../../domain/notification/dto/res-dto/res-notifications.dto";

@Injectable()
export class NotificationMockAdapter extends NotificationRepository {
	constructor() {
		super();
		logger.info('NotificationMockAdapter was init');
	}

	async createNotification(data: ReqCreateNotificationDto): Promise<ResNotificationDto> {
		throw new Error(`NotificationMockAdapter called createNotification with param - ${JSON.stringify(data)}`);
	}

	async getNotification(id: string): Promise<ResNotificationDto> {
		throw new Error(`NotificationMockAdapter called getNotification with param - ${JSON.stringify(id)}`);
	}

	async getNotifications(userId?: string, templateId?: string): Promise<ResNotificationsDto> {
		throw new Error(`NotificationMockAdapter called getNotifications with params - ${JSON.stringify(userId)}, ${JSON.stringify(templateId)}`);
	}
}
