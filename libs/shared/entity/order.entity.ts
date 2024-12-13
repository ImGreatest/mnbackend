import { DateTime } from "luxon";
import { EOrderStatus } from "@enums";

export interface IOrder {
	id: string;
	userId: string;
	dateDelivery: DateTime;
	cost: number;
	status: EOrderStatus;
	comment?: string;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}
