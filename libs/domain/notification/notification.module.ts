import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { NotificationRepository } from "./repository/notification.repository";
import { NotificationAdapter } from "../../adapter/notification/notification.adapter";

@Module({
	providers: [
		NotificationService,
		{
			provide: NotificationRepository,
			useClass: NotificationAdapter,
		},
	],
	exports: [NotificationService],
})
export class NotificationModule {}
