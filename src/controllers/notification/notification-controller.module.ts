import { Module } from "@nestjs/common";
import { NotificationController } from "./notification.controller";
import { NotificationModule } from "../../../libs/domain/notification/notification.module";
import { NotificationTemplateModule } from "../../../libs/domain/notification/notification-template.module";

@Module({
  imports: [NotificationModule, NotificationTemplateModule],
  controllers: [NotificationController],
})
export class NotificationControllerModule {}
