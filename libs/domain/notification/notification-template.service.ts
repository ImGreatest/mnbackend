import { Injectable } from "@nestjs/common";
import { NotificationTemplateRepository } from "./repositories/notification-template.repository";
import { ReqCreateNotificationTemplateDto } from "./dto/req-dto/req-create-notification-template.dto";
import { ResNotificationTemplateDto } from "./dto/res-dto/res-notification-template.dto";
import { ENotificationType } from "@prisma/client";
import { ResNotificationTemplatesDto } from "./dto/res-dto/res-notification-templates.dto";
import { ReqUpdateNotificationTemplateDto } from "./dto/req-dto/req-update-notification-template.dto";
import { ResUpdateNotificationTemplateDto } from "./dto/res-dto/res-update-notification-template.dto";

@Injectable()
export class NotificationTemplateService {
  constructor(private readonly rep: NotificationTemplateRepository) {}

  createTemplate(
    data: ReqCreateNotificationTemplateDto,
  ): Promise<ResNotificationTemplateDto> {
    return this.rep.createTemplate(data);
  }

  getTemplate(id: string): Promise<ResNotificationTemplateDto> {
    return this.rep.getTemplate(id);
  }

  getTemplates(type?: ENotificationType): Promise<ResNotificationTemplatesDto> {
    return this.rep.getTemplates(type);
  }

  updateTemplate(
    id: string,
    data: ReqUpdateNotificationTemplateDto,
  ): Promise<ResUpdateNotificationTemplateDto> {
    return this.rep.updateTemplate(id, data);
  }

  deleteTemplate(id: string): Promise<void> {
    return this.rep.deleteTemplate(id);
  }
}
