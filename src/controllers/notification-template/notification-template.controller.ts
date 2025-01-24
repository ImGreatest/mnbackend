import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { NotificationTemplateService } from "../../../libs/domain/notification/notification-template.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { ReqCreateNotificationTemplateDto } from "../../../libs/domain/notification/dto/req-dto/req-create-notification-template.dto";
import { ResNotificationTemplateDto } from "../../../libs/domain/notification/dto/res-dto/res-notification-template.dto";
import { ENotificationType, ERole } from "@prisma/client";
import { ResNotificationTemplatesDto } from "../../../libs/domain/notification/dto/res-dto/res-notification-templates.dto";
import { ReqUpdateNotificationTemplateDto } from "../../../libs/domain/notification/dto/req-dto/req-update-notification-template.dto";
import { ResUpdateNotificationTemplateDto } from "../../../libs/domain/notification/dto/res-dto/res-update-notification-template.dto";

@ApiTags("notification-template")
@ApiBearerAuth()
@Controller("notification-template")
export class NotificationTemplateController {
  constructor(
    private readonly notificationTemplateService: NotificationTemplateService,
  ) {}

  @Post("create-template")
  @ApiOperation({})
  @ApiBody({
    type: ReqCreateNotificationTemplateDto,
  })
  createTemplate(
    @Body() data: ReqCreateNotificationTemplateDto,
  ): Promise<ResNotificationTemplateDto> {
    return this.notificationTemplateService.createTemplate(data);
  }

  @Get("get-template/:id")
  @ApiOperation({})
  @ApiParam({
    type: String,
    name: "id",
    required: true,
  })
  getTemplate(@Param("id") id: string): Promise<ResNotificationTemplateDto> {
    return this.notificationTemplateService.getTemplate(id);
  }

  @Get("get-templates")
  @ApiOperation({})
  @ApiQuery({
    enum: ENotificationType,
    enumName: "ENotificationType",
    required: false,
  })
  getTemplates(
    @Query() type?: ENotificationType,
  ): Promise<ResNotificationTemplatesDto> {
    return this.notificationTemplateService.getTemplates(type);
  }

  @Post("update-template:/id")
  @ApiOperation({})
  @ApiParam({
    type: String,
    name: "id",
  })
  @ApiBody({
    type: ReqUpdateNotificationTemplateDto,
  })
  updateTemplate(
    @Param("id") id: string,
    @Body() data: ReqUpdateNotificationTemplateDto,
  ): Promise<ResUpdateNotificationTemplateDto> {
    return this.notificationTemplateService.updateTemplate(id, data);
  }

  @Delete("delete-template/:id")
  @ApiOperation({})
  @ApiParam({
    type: String,
    name: "id",
  })
  deleteTemplate(@Param("id") id: string): Promise<void> {
    return this.notificationTemplateService.deleteTemplate(id);
  }
}
