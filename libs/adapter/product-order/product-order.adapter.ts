import { Injectable } from "@nestjs/common";
import { ProductOrderRepository } from "../../domain/product-order/repositories/product-order.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ResProductsOrderDto } from "../../domain/product-order/dto/res-products-order.dto";
import { logger } from "../../../logger/logger";
import { ProductService } from "../../domain/product/product.service";
import { ResOrdersContainProductDto } from "../../domain/product-order/dto/res-orders-contain-product.dto";
import { OrderService } from "../../domain/order/order.service";

@Injectable()
export class ProductOrderAdapter extends ProductOrderRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService,
    private readonly orderService: OrderService,
  ) {
    super();
  }

  async getProductsOrder(orderId: string): Promise<ResProductsOrderDto> {
    logger.verbose(
      `ProductOrderAdapter was called method getProductsOrder with param - ${JSON.stringify(orderId)}`,
    );

    return {
      products: await this.prisma.productOrder
        .findMany({
          where: { orderId: orderId },
        })
        .then(async (res) => {
          const products = res.map(async (ids) => {
            try {
              return await this.productService.getProduct(ids.productId);
            } catch (e) {
              logger.error(e);
              throw e;
            }
          });

          return await Promise.all(products);
        })
        .catch((e) => {
          logger.error(e);

          throw Error(e);
        }),
    };
  }

  async getOrdersContainProduct(
    productId: string,
  ): Promise<ResOrdersContainProductDto> {
    logger.verbose(
      `ProductOrderAdapter was called getOrdersWithProduct method with param - ${productId}`,
    );

    return {
      orders: await this.prisma.productOrder
        .findMany({
          where: { productId: productId },
        })
        .then(async (res) => {
          const orders = res.map(async (ids) => {
            try {
              return await this.orderService.getOrder(ids.orderId);
            } catch (e) {
              logger.error(e);
              throw e;
            }
          });

          return await Promise.all(orders);
        })
        .catch((e) => {
          logger.error(e);

          throw Error(e);
        }),
    };
  }
}
