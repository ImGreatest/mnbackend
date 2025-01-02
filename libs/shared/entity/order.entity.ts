import { Decimal } from "@prisma/client/runtime/library";
import { EOrderStatus } from "../enum";

export interface IOrder {
	id: string;
	userId: string;
	dateDelivery: Date;
	cost: Decimal;
	status: EOrderStatus;
	comment?: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
