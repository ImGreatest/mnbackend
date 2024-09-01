import { Module } from '@nestjs/common';
import { UserControllerModule } from "./controllers/user/user-controller.module";
import { BookingControllerModule } from "./controllers/booking/booking-controller.module";

@Module({
  imports: [UserControllerModule, BookingControllerModule],
})
export class AppModule {}
