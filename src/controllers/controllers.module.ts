import { Module } from "@nestjs/common";
import { UserControllerModule } from "./user/user-controller.module";
import { BookingControllerModule } from "./booking/booking-controller.module";
import { ProductControllerModule } from "./product/product-controller.module";
import { SizeControllerModule } from "./size/size-controller.module";
import { CollectionControllerModule } from "./collection/collection-controller.module";
import { OrderControllerModule } from "./order/order-controller.module";
import { AuthControllerModule } from "./auth/auth-controller.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "../services/auth/guards/auth.guard";
import { JwtService } from "@nestjs/jwt";

@Module({
	imports: [
		AuthControllerModule,
		UserControllerModule,
		BookingControllerModule,
		ProductControllerModule,
		SizeControllerModule,
		OrderControllerModule,
		CollectionControllerModule,
    // MinioControllerModule,
	],
	providers: [
		{
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
		JwtService,
	],
})
export class ControllersModule {}
