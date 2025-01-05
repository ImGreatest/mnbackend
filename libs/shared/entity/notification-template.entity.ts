import { ENotificationType } from "@prisma/client";

export interface INotificationTemplate {
	id: string;
	title: string;
	description?: string;
	type: ENotificationType;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
