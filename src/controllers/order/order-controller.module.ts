import { Module } from "@nestjs/common";
import { OrderModule } from "../../../libs/domain/order/order.module";
import { OrderController } from "./order.controller";

@Module({
	imports: [OrderModule],
	controllers: [OrderController],
})
export class OrderControllerModule {}
