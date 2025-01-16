import { Module } from "@nestjs/common";
import { OrderModule } from "../../../libs/domain/order/order.module";
import { OrderController } from "./order.controller";
import { ProductOrderModule } from "../../../libs/domain/product-order/product-order.module";

@Module({
  imports: [OrderModule, ProductOrderModule],
  controllers: [OrderController],
})
export class OrderControllerModule {}
