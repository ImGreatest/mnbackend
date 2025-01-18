import { Provider } from "@nestjs/common";
import { ProductOrderService } from "../product-order.service";
import { ProductOrderRepository } from "../repositories/product-order.repository";
import { ProductOrderAdapter } from "../../../adapter/product-order/product-order.adapter";

export const ProductOrderProvider: Provider[] = [
	ProductOrderService,
	{
		provide: ProductOrderRepository,
		useClass: ProductOrderAdapter,
	},
];
