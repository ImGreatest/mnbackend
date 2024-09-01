import { Module } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingAdapter } from "../../adapter/booking/booking.adapter";
import { BookingRepository } from "./repositories/booking.repository";

@Module({
	providers: [
		BookingService,
		{
			provide: BookingRepository,
			useClass: BookingAdapter,
		}
	],
	exports: [BookingService],
})
export class BookingModule {}
