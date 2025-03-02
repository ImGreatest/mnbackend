import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Roles } from "../../../libs/common/decorators/roles.decorator";
import { NotificationService } from "../../../libs/domain/notification/notification.service";
import { ReqCreateNotificationDto } from "../../../libs/domain/notification/dto/req-dto/req-create-notification.dto";
import { ResNotificationDto } from "../../../libs/domain/notification/dto/res-dto/res-notification.dto";
import { faker } from "@faker-js/faker";
import { ResNotificationsDto } from "../../../libs/domain/notification/dto/res-dto/res-notifications.dto";

@ApiTags("notification")
@ApiBearerAuth()
@Roles("admin")
@Controller(["notification"])
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post("create-notification")
  @ApiBody({
    type: ReqCreateNotificationDto,
  })
  createNotification(
    @Body() data: ReqCreateNotificationDto,
  ): Promise<ResNotificationDto> {
    return this.notificationService.createNotification(data);
  }

  @Get("get-notification/:id")
  @ApiParam({
    type: String,
    name: "id",
    example: faker.string.uuid(),
  })
  @ApiOperation({})
  getNotification(@Param("id") id: string): Promise<ResNotificationDto> {
    return this.notificationService.getNotification(id);
  }

  @Get("get-notifications")
  @ApiQuery({
    type: String,
    name: "user",
  })
  @ApiQuery({
    type: String,
    name: "template",
  })
  getNotifications(
    @Query("user") userId?: string,
    @Query("template") templateId?: string,
  ): Promise<ResNotificationsDto> {
    return this.notificationService.getNotifications(userId, templateId);
  }
}
