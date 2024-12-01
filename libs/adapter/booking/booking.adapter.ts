import { Injectable } from "@nestjs/common";
import { BookingRepository } from "../../domain/booking/repositories/booking.repository";
import { ReqCreateReservationDto } from "../../domain/booking/dto/req-dto/req-create-reservation.dto";
import { ResReservationDto } from "../../domain/booking/dto/res-dto/res-reservation.dto";
import { ReqUpdateReservationDto } from "../../domain/booking/dto/req-dto/req-update-reservation.dto";
import { ResUpdateReservationDto } from "../../domain/booking/dto/res-dto/res-update-reservation.dto";

@Injectable()
export class BookingAdapter extends BookingRepository {
	constructor() {
		super();
	}

	async createReservation(data: ReqCreateReservationDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getReservation(reservationId: string, userId?: string): Promise<ResReservationDto> {
		throw new Error(`${reservationId}, ${userId}`);
	}

	async getReservations(): Promise<ResReservationDto[]> {
		throw new Error();
	}

	async getReservationsByDate(date: Date, userId?: string): Promise<ResReservationDto[]> {
		throw new Error(`${date}, ${userId}`);
	}

	async updateReservation(reservationId: string, data: ReqUpdateReservationDto): Promise<ResUpdateReservationDto> {
		throw new Error(`${reservationId}, ${{ ...data }}`);
	}

	async deleteReservation(reservationId: string): Promise<void> {
		throw new Error(`${reservationId}`);
	}
}
