import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { NotificationProvider } from "./providers/notification.provider";

@Module({
  providers: [...NotificationProvider],
  exports: [NotificationService],
})
export class NotificationModule {}
