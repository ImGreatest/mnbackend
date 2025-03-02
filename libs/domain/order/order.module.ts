import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderProvider } from "./providers/order.provider";

@Module({
  providers: [...OrderProvider],
  exports: [OrderService],
})
export class OrderModule {}
