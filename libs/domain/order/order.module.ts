import { Module } from "@nestjs/common";
import { OrderAdapter } from "../../adapter/order/order.adapter";
import { OrderService } from "./order.service";
import { OrderRepository } from "./repository/order.repository";

@Module({
	providers: [
		OrderService,
		{
			provide: OrderRepository,
			useClass: OrderAdapter,
		},
	],
	exports: [OrderService],
})
export class OrderModule {}
