import { Provider } from "@nestjs/common";
import { NotificationService } from "../notification.service";
import { NotificationAdapter } from "../../../adapter/notification/notification.adapter";
import { NotificationRepository } from "../repositories/notification.repository";

export const NotificationProvider: Provider[] = [
	NotificationService,
	{
		provide: NotificationRepository,
		useClass: NotificationAdapter,
	},
];
