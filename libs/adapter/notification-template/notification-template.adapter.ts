import { Injectable } from "@nestjs/common";
import { NotificationTemplateRepository } from "../../domain/notification/repositories/notification-template.repository";
import {
	ReqCreateNotificationTemplateDto
} from "../../domain/notification/dto/req-dto/req-create-notification-template.dto";
import { ResNotificationTemplateDto } from "../../domain/notification/dto/res-dto/res-notification-template.dto";
import { logger } from "../../../logger/logger";
import { ENotificationType } from "@prisma/client";
import { ResNotificationTemplatesDto } from "../../domain/notification/dto/res-dto/res-notification-templates.dto";
import {
	ReqUpdateNotificationTemplateDto
} from "../../domain/notification/dto/req-dto/req-update-notification-template.dto";
import {
	ResUpdateNotificationTemplateDto
} from "../../domain/notification/dto/res-dto/res-update-notification-template.dto";
import { PrismaService } from "../../services/prisma/prisma.service";

@Injectable()
export class NotificationTemplateAdapter extends NotificationTemplateRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('NotificationTemplateAdapter was init');
	}

	async createTemplate(data: ReqCreateNotificationTemplateDto): Promise<ResNotificationTemplateDto> {
		logger.verbose(`NotificationTemplateAdapter called createTemplate method with param - ${JSON.stringify(data)}`);

		return this.prisma.notificationTemplate.create({ data });
	}

	async getTemplate(id: string): Promise<ResNotificationTemplateDto> {
		logger.verbose(`NotificationTemplateAdapter called getTemplate method with param - ${JSON.stringify(id)}`);

		return this.prisma.notificationTemplate.findUnique({
			where: { id: id },
		});
	}

	async getTemplates(type?: ENotificationType): Promise<ResNotificationTemplatesDto> {
		if (type) {
			logger.verbose(`NotificationTemplateAdapter called getTemplates method with param - ${JSON.stringify(type)}`);
		} else {
			logger.verbose('NotificationTemplateAdapter called getTemplates without params');
		}

		return {
			templates: await this.prisma.notificationTemplate.findMany({
				where: { type: type },
			}),
		}
	}

	async updateTemplate(id: string, data: ReqUpdateNotificationTemplateDto): Promise<ResUpdateNotificationTemplateDto> {
		logger.verbose(`NotificationTemplateAdapter called updateTemplate method with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);

		return this.prisma.notificationTemplate.update({
			where: { id: id },
			data: data,
		});
	}

	async deleteTemplate(id: string): Promise<void> {
		logger.verbose(`NotificationTemplateAdapter called deleteTemplate method with param - ${JSON.stringify(id)}`);

		await this.prisma.notificationTemplate.delete({ where: { id: id } });
	}
}
