import { Injectable } from "@nestjs/common";
import { ResNotificationTemplateDto } from "../dto/res-dto/res-notification-template.dto";
import { ResUpdateNotificationTemplateDto } from "../dto/res-dto/res-update-notification-template.dto";
import { ResNotificationTemplatesDto } from "../dto/res-dto/res-notification-templates.dto";
import { ReqCreateNotificationTemplateDto } from "../dto/req-dto/req-create-notification-template.dto";
import { ENotificationType } from "@prisma/client";
import { ReqUpdateNotificationTemplateDto } from "../dto/req-dto/req-update-notification-template.dto";

@Injectable()
export abstract class NotificationTemplateRepository {
	abstract createTemplate(data: ReqCreateNotificationTemplateDto): Promise<ResNotificationTemplateDto>;

	abstract getTemplate(id: string): Promise<ResNotificationTemplateDto>;

	abstract getTemplates(type?: ENotificationType): Promise<ResNotificationTemplatesDto>;

	abstract updateTemplate(id: string, data: ReqUpdateNotificationTemplateDto): Promise<ResUpdateNotificationTemplateDto>;

	abstract deleteTemplate(id: string): Promise<void>;
}
