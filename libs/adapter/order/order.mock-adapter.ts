import { OrderRepository } from "../../domain/order/repository/order.repository";
import { Injectable } from "@nestjs/common";
import { ReqOrderDto } from "../../domain/order/dto/req-dto/req-order.dto";
import { ResOrderDto } from "../../domain/order/dto/res-dto/res-order.dto";
import { ResOrdersDto } from "../../domain/order/dto/res-dto/res-orders.dto";
import { ReqUpdateOrderDto } from "../../domain/order/dto/req-dto/req-update-order.dto";

@Injectable()
export class OrderMockAdapter extends OrderRepository {
	constructor() {
		super();
	}

	async createOrder(data: ReqOrderDto): Promise<ResOrderDto> {
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getOrder(orderId: string, userId?: string): Promise<ResOrderDto> {
		if (userId) {
			throw new Error(`${JSON.stringify(orderId)}, ${JSON.stringify(userId)}`);
		} else {
			throw new Error(`${JSON.stringify(orderId)}`);
		}
	}

	async getOrders(userId?: string, status?: string): Promise<ResOrdersDto> {
		throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(status)}`);
	}

	async updateOrder(orderId: string, data: ReqUpdateOrderDto): Promise<ResOrderDto> {
		throw new Error(`${JSON.stringify(orderId)}, ${JSON.stringify(data)}`);
	}

	async deleteOrder(orderId: string): Promise<void> {
		throw new Error(`${JSON.stringify(orderId)}`);
	}
}
