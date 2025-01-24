import { Module } from "@nestjs/common";
import { ProductOrderService } from "./product-order.service";
import { ProductOrderProvider } from "./providers/product-order.provider";
import { ProductModule } from "../product/product.module";
import { OrderModule } from "../order/order.module";

@Module({
  imports: [ProductModule, OrderModule],
  providers: [...ProductOrderProvider],
  exports: [ProductOrderService],
})
export class ProductOrderModule {}
