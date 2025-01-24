import { Module } from "@nestjs/common";
import { NotificationTemplateModule } from "../../../libs/domain/notification/notification-template.module";
import { NotificationTemplateController } from "./notification-template.controller";

@Module({
  imports: [NotificationTemplateModule],
  controllers: [NotificationTemplateController],
})
export class NotificationTemplateControllerModule {}
