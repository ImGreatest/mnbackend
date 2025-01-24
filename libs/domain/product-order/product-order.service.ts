import { Injectable } from "@nestjs/common";
import { ProductOrderRepository } from "./repositories/product-order.repository";
import { ResProductsOrderDto } from "./dto/res-products-order.dto";
import { ResOrdersContainProductDto } from "./dto/res-orders-contain-product.dto";

@Injectable()
export class ProductOrderService {
  constructor(private readonly rep: ProductOrderRepository) {}

  getProductsOrder(orderId: string): Promise<ResProductsOrderDto> {
    return this.rep.getProductsOrder(orderId);
  }

  getOrdersContainProduct(
    productId: string,
  ): Promise<ResOrdersContainProductDto> {
    return this.rep.getOrdersContainProduct(productId);
  }
}
