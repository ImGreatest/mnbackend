import { Injectable } from "@nestjs/common";
import { ResOrderDto } from "../dto/res-dto/res-order.dto";
import { ResOrdersDto } from "../dto/res-dto/res-orders.dto";
import { ReqUpdateOrderDto } from "../dto/req-dto/req-update-order.dto";
import { ReqOrderDto } from "../dto/req-dto/req-order.dto";

@Injectable()
export abstract class OrderRepository {
	abstract createOrder(data: ReqOrderDto): Promise<void>;

	abstract getOrder(orderId: string, userId?: string): Promise<ResOrderDto>;

	abstract getOrders(userId?: string, status?: string): Promise<ResOrdersDto>;

	abstract updateOrder(orderId: string, data: ReqUpdateOrderDto): Promise<void>;

	abstract deleteOrder(orderId: string): Promise<void>;
}
