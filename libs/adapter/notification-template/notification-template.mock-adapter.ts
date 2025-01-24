import { Injectable } from "@nestjs/common";
import { NotificationTemplateRepository } from "../../domain/notification/repositories/notification-template.repository";
import { logger } from "../../../logger/logger";
import { ResNotificationTemplateDto } from "../../domain/notification/dto/res-dto/res-notification-template.dto";
import { ReqCreateNotificationTemplateDto } from "../../domain/notification/dto/req-dto/req-create-notification-template.dto";
import { ENotificationType } from "@prisma/client";
import { ResNotificationTemplatesDto } from "../../domain/notification/dto/res-dto/res-notification-templates.dto";
import { ResUpdateNotificationTemplateDto } from "../../domain/notification/dto/res-dto/res-update-notification-template.dto";
import { ReqUpdateNotificationTemplateDto } from "../../domain/notification/dto/req-dto/req-update-notification-template.dto";

@Injectable()
export class NotificationTemplateMockAdapter extends NotificationTemplateRepository {
  constructor() {
    super();
    logger.info("NotificationTemplateMockAdapter was init");
  }

  async createTemplate(
    data: ReqCreateNotificationTemplateDto,
  ): Promise<ResNotificationTemplateDto> {
    throw new Error(
      `NotificationTemplateMockAdapter called createTemplate with param - ${JSON.stringify(data)}`,
    );
  }

  async getTemplate(id: string): Promise<ResNotificationTemplateDto> {
    throw new Error(
      `NotificationTemplateMockAdapter called getTemplate method with param - ${JSON.stringify(id)}`,
    );
  }

  async getTemplates(
    type?: ENotificationType,
  ): Promise<ResNotificationTemplatesDto> {
    if (type) {
      throw new Error(
        `NotificationTemplateMockAdapter called getTemplates method with param - ${JSON.stringify(type)}`,
      );
    } else {
      throw new Error(
        "NotificationTemplateMockAdapter called getTemplates without params",
      );
    }
  }

  async updateTemplate(
    id: string,
    data: ReqUpdateNotificationTemplateDto,
  ): Promise<ResUpdateNotificationTemplateDto> {
    throw new Error(
      `NotificationTemplateMockAdapter called updateTemplate with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`,
    );
  }

  async deleteTemplate(id: string): Promise<void> {
    throw new Error(
      `NotificationTemplateMockAdapter called deleteTemplate method with param - ${JSON.stringify(id)}`,
    );
  }
}
