import { Module } from "@nestjs/common";
import { NotificationTemplateService } from "./notification-template.service";
import { NotificationTemplateRepository } from "./repository/notification-template.repository";
import { NotificationTemplateAdapter } from "../../adapter/notification-template/notification-template.adapter";

@Module({
	providers: [
		NotificationTemplateService,
		{
			provide: NotificationTemplateRepository,
			useClass: NotificationTemplateAdapter,
		},
	],
	exports: [NotificationTemplateService],
})
export class NotificationTemplateModule {}
