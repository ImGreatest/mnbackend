import { IOrder } from "../../../../shared/entity";
import { EOrderStatus } from "../../../../shared/enum";

export class ResOrderDto implements IOrder {
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
