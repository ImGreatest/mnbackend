import { Injectable } from "@nestjs/common";
import { BookingRepository } from "./repositories/booking.repository";
import { ReqCreateReservationDto } from "./dto/req-dto/req-create-reservation.dto";
import { ResReservationDto } from "./dto/res-dto/res-reservation.dto";
import { ReqUpdateReservationDto } from "./dto/req-dto/req-update-reservation.dto";
import { ResUpdateReservationDto } from "./dto/res-dto/res-update-reservation.dto";

@Injectable()
export class BookingService {
	constructor(private readonly bookRepository: BookingRepository) {}

	async createReservation(data: ReqCreateReservationDto): Promise<void> {
		return this.bookRepository.createReservation(data);
	}

	async getReservation(reservationId: string, userId?: string): Promise<ResReservationDto> {
		return this.bookRepository.getReservation(reservationId, userId);
	}

	async getReservations(): Promise<ResReservationDto[]> {
		return this.bookRepository.getReservations();
	}

	async getReservationsByDate(date: Date, userId?: string): Promise<ResReservationDto[]> {
		return this.bookRepository.getReservationsByDate(date, userId);
	}

	async updateReservation(reservationId: string, data: ReqUpdateReservationDto): Promise<ResUpdateReservationDto> {
		return this.bookRepository.updateReservation(reservationId, data);
	}

	async deleteReservation(reservationId: string): Promise<void> {
		return this.bookRepository.deleteReservation(reservationId);
	}
}
