import { EOrderStatus } from "@enums";

export interface IOrder {
	id: string;
	userId: string;
	dateDelivery: Date;
	cost: number;
	status: EOrderStatus;
	comment?: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
