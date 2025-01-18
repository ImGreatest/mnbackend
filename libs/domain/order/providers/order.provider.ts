import { Provider } from "@nestjs/common";
import { OrderService } from "../order.service";
import { OrderRepository } from "../repositories/order.repository";
import { OrderAdapter } from "../../../adapter/order/order.adapter";

export const OrderProvider: Provider[] = [
	OrderService,
	{
		provide: OrderRepository,
		useClass: OrderAdapter,
	},
];
