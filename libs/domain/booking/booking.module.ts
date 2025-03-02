import { Module } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingProvider } from "./providers/booking.provider";

@Module({
  providers: [...BookingProvider],
  exports: [BookingService],
})
export class BookingModule {}
