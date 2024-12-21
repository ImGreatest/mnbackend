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

	async createOrder(data: ReqOrderDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getOrder(orderId: string, userId?: string): Promise<ResOrderDto> {
		throw new Error(`${orderId}, ${userId}`);
	}

	async getOrders(userId?: string, status?: string): Promise<ResOrdersDto> {
		throw new Error(`${userId}, ${status}}`);
	}

	async updateOrder(orderId: string, data: ReqUpdateOrderDto): Promise<void> {
		throw new Error(`${orderId}, ${{ ...data }}`);
	}

	async deleteOrder(orderId: string): Promise<void> {
		throw new Error(`${orderId}`);
	}
}
