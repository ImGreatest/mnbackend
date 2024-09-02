import { Module } from "@nestjs/common";
import { UserControllerModule } from "./user/user-controller.module";
import { BookingControllerModule } from "./booking/booking-controller.module";
import { ProductControllerModule } from "./product/product-controller.module";

@Module({
	imports: [
		UserControllerModule,
		BookingControllerModule,
		ProductControllerModule,
	],
})
export class ControllersModule {}
