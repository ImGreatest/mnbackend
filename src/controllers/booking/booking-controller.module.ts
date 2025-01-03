import { Module } from "@nestjs/common";
import { BookingController } from "./booking.controller";
import { BookingModule } from "../../../libs/domain/booking/booking.module";

@Module({
  imports: [BookingModule],
  controllers: [BookingController],
})
export class BookingControllerModule {}
