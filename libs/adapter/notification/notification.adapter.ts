import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../../domain/notification/repositories/notification.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateNotificationDto } from "../../domain/notification/dto/req-dto/req-create-notification.dto";
import { ResNotificationDto } from "../../domain/notification/dto/res-dto/res-notification.dto";
import { ResNotificationsDto } from "../../domain/notification/dto/res-dto/res-notifications.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class NotificationAdapter extends NotificationRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    logger.info("NotificationAdapter was init");
  }

  async createNotification(
    data: ReqCreateNotificationDto,
  ): Promise<ResNotificationDto> {
    logger.verbose(
      `NotificationAdapter called createNotification method with param - ${JSON.stringify(data)}`,
    );

    return this.prisma.notification.create({ data });
  }

  async getNotification(id: string): Promise<ResNotificationDto> {
    logger.verbose(
      `NotificationAdapter called getNotification method with param - ${JSON.stringify(id)}`,
    );

    return this.prisma.notification.findUnique({
      where: { id: id },
    });
  }

  async getNotifications(
    userId?: string,
    templateId?: string,
  ): Promise<ResNotificationsDto> {
    logger.verbose(
      `NotificationAdapter called getNotifications method with params - ${JSON.stringify(userId)}, ${JSON.stringify(templateId)}`,
    );

    return {
      notifications: await this.prisma.notification.findMany({
        where: {
          userId: userId,
          templateId: templateId,
        },
      }),
    };
  }
}
