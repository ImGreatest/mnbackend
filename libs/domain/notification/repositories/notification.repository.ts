import { Injectable } from "@nestjs/common";
import { ResNotificationDto } from "../dto/res-dto/res-notification.dto";
import { ResNotificationsDto } from "../dto/res-dto/res-notifications.dto";
import { ReqCreateNotificationDto } from "../dto/req-dto/req-create-notification.dto";

@Injectable()
export abstract class NotificationRepository {
  abstract createNotification(
    data: ReqCreateNotificationDto,
  ): Promise<ResNotificationDto>;

  abstract getNotification(id: string): Promise<ResNotificationDto>;

  abstract getNotifications(
    userId?: string,
    templateId?: string,
  ): Promise<ResNotificationsDto>;
}
