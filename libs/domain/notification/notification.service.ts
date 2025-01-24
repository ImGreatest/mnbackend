import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "./repositories/notification.repository";
import { ReqCreateNotificationDto } from "./dto/req-dto/req-create-notification.dto";
import { ResNotificationDto } from "./dto/res-dto/res-notification.dto";
import { ResNotificationsDto } from "./dto/res-dto/res-notifications.dto";

@Injectable()
export class NotificationService {
  constructor(private readonly rep: NotificationRepository) {}

  createNotification(
    data: ReqCreateNotificationDto,
  ): Promise<ResNotificationDto> {
    return this.rep.createNotification(data);
  }

  getNotification(id: string): Promise<ResNotificationDto> {
    return this.rep.getNotification(id);
  }

  getNotifications(
    userId?: string,
    templateId?: string,
  ): Promise<ResNotificationsDto> {
    return this.rep.getNotifications(userId, templateId);
  }
}
