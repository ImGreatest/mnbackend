import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../../domain/order/repository/order.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqOrderDto } from "../../domain/order/dto/req-dto/req-order.dto";
import { ResOrderDto } from "../../domain/order/dto/res-dto/res-order.dto";
import { EOrderStatus } from "../../shared/enum";
import { ResOrdersDto } from "../../domain/order/dto/res-dto/res-orders.dto";
import { ReqUpdateOrderDto } from "../../domain/order/dto/req-dto/req-update-order.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class OrderAdapter extends OrderRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async createOrder(data: ReqOrderDto): Promise<void> {
		logger.info(`Adapter call - createOrder method, param - ${{ ...data }}`);

		await this.prisma.order.create({
			 data: {
				 ...data,
			 },
		 });
	}

	async getOrder(orderId: string): Promise<ResOrderDto> {
		logger.info(`Adapter call - getOrder method, param - ${orderId}`);

		const order = await this.prisma.order.findUnique({
			where: {
				id: orderId,
			},
		});

		return {
			...order,
			status: order.status as EOrderStatus,
		} as ResOrderDto;
	}

	async getOrders(userId?: string, status?: string): Promise<ResOrdersDto> {
		logger.info(`Adapter call - getOrders method, param - ${userId}, ${status}`);

		const orders = await this.prisma.order.findMany({
			where: {
				userId: userId,
				status: EOrderStatus[status],
			},
		});

		return {
			orders: orders.map(order => ({
				...order,
				status: order.status as EOrderStatus,
			})),
		};
	}

	async updateOrder(orderId: string, data: ReqUpdateOrderDto): Promise<void> {
		logger.info(`Adapter call - updateOrder method, param - ${orderId}, ${{ ...data }}`);

		await this.prisma.order.update({
			where: { id: orderId },
			data: { ...data },
		});
	}

	async deleteOrder(orderId: string): Promise<void> {
		logger.info(`Adapter call - deleteOrder method, param - ${orderId}`);

		await this.prisma.order.delete({
			where: {
				id: orderId,
			},
		});
	}
}
