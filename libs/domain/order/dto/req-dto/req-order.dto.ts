import { EOrderStatus } from "@enums";

export class ReqOrderDto {
	userId: string;
	dateDelivery: string;
	cost: number;
	status: EOrderStatus;
	comment?: string;
}
