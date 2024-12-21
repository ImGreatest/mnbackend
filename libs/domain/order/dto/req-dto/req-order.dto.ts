import { EOrderStatus } from "../../../../shared/enum";

export class ReqOrderDto {
	userId: string;
	dateDelivery: string;
	cost: number;
	status: EOrderStatus;
	comment?: string;
}
