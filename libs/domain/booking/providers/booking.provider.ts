import { BookingService } from "../booking.service";
import { Provider } from "@nestjs/common";
import { BookingRepository } from "../repositories/booking.repository";
import { BookingAdapter } from "../../../adapter/booking/booking.adapter";

export const BookingProvider: Provider[] = [
	BookingService,
	{
		provide: BookingRepository,
		useClass: BookingAdapter,
	},
];
