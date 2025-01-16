import { Injectable } from "@nestjs/common";
import { ResProductsOrderDto } from "../dto/res-products-order.dto";
import { ResOrdersContainProductDto } from "../dto/res-orders-contain-product.dto";

@Injectable()
export abstract class ProductOrderRepository {
	abstract getProductsOrder(orderId: string): Promise<ResProductsOrderDto>;

	abstract getOrdersContainProduct(productId: string): Promise<ResOrdersContainProductDto>;
}
