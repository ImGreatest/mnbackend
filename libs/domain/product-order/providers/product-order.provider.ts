import { Provider } from "@nestjs/common";
import { ProductOrderService } from "../product-order.service";
import { ProductRepository } from "../../product/repositories/product.repository";
import { ProductAdapter } from "../../../adapter/product/product.adapter";

export const ProductOrderProvider: Provider[] = [
	ProductOrderService,
	{
		provide: ProductRepository,
		useClass: ProductAdapter,
	}
];
