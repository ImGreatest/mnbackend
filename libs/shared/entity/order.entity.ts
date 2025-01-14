import { Decimal } from "@prisma/client/runtime/library";
// import { EOrderStatus } from "../enum";
import { EOrderStatus } from "@prisma/client";

export interface IOrder {
	id: string;
	dateDelivery: Date;
	cost: Decimal;
	status: EOrderStatus;
	comment?: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
