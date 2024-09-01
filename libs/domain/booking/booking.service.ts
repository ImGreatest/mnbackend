import { Injectable } from "@nestjs/common";
import { BookingRepository } from "./repositories/booking.repository";
import { ReqCreateReservationDto } from "./dto/req/req-create-reservation.dto";
import { ResReservationDto } from "./dto/res/res-reservation.dto";
import { ReqUpdateReservationDto } from "./dto/req/req-update-reservation.dto";
import { ResUpdatedReservationDto } from "./dto/res/res-updated-reservation.dto";

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

	async updateReservation(reservationId: string, data: ReqUpdateReservationDto): Promise<ResUpdatedReservationDto> {
		return this.bookRepository.updateReservation(reservationId, data);
	}

	async deleteReservation(reservationId: string): Promise<void> {
		return this.bookRepository.deleteReservation(reservationId);
	}
}
