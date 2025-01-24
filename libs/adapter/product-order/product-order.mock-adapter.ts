import { Injectable } from "@nestjs/common";
import { ProductOrderRepository } from "../../domain/product-order/repositories/product-order.repository";
import { ResProductsOrderDto } from "../../domain/product-order/dto/res-products-order.dto";
import { ResOrdersContainProductDto } from "../../domain/product-order/dto/res-orders-contain-product.dto";

@Injectable()
export class ProductOrderMockAdapter extends ProductOrderRepository {
  constructor() {
    super();
  }

  async getProductsOrder(orderId: string): Promise<ResProductsOrderDto> {
    throw new Error(`${JSON.stringify(orderId)}`);
  }

  async getOrdersContainProduct(
    productId: string,
  ): Promise<ResOrdersContainProductDto> {
    throw new Error(`${JSON.stringify(productId)}`);
  }
}
