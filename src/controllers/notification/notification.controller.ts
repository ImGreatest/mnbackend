import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery, ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Get, HttpStatus, Param, Post, Query } from "@nestjs/common";
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
    required: true,
    description: "Data for creating notice",
  })
  @ApiOperation({ summary: "Do request for creating notice" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Successfully to create notice",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (non-valid)"
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
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
    description: "Identifier notice",
    example: faker.string.uuid(),
  })
  @ApiOperation({ summary: "Do request for getting notice" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  getNotification(@Param("id") id: string): Promise<ResNotificationDto> {
    return this.notificationService.getNotification(id);
  }

  @Get("get-notifications")
  @ApiQuery({
    type: String,
    name: "user",
    description: "Identifier user",
  })
  @ApiQuery({
    type: String,
    name: "template",
    description: "Identifier template",
  })
  @ApiOperation({ summary: "Do request for getting all notices" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  getNotifications(
    @Query("user") userId?: string,
    @Query("template") templateId?: string,
  ): Promise<ResNotificationsDto> {
    return this.notificationService.getNotifications(userId, templateId);
  }
}
