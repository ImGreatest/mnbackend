import { Module } from "@nestjs/common";
import { NotificationTemplateService } from "./notification-template.service";
import { NotificationTemplateProvider } from "./providers/notification-template.providers";

@Module({
	providers: [...NotificationTemplateProvider],
	exports: [NotificationTemplateService],
})
export class NotificationTemplateModule {}
