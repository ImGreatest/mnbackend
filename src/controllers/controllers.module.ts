import { Module } from "@nestjs/common";
import { UserControllerModule } from "./user/user-controller.module";
import { BookingControllerModule } from "./booking/booking-controller.module";
import { ProductControllerModule } from "./product/product-controller.module";
import { SizeControllerModule } from "./size/size-controller.module";
import { CollectionControllerModule } from "./collection/collection-controller.module";

@Module({
	imports: [
		UserControllerModule,
		BookingControllerModule,
		ProductControllerModule,
		SizeControllerModule,
		CollectionControllerModule,
	],
})
export class ControllersModule {}
