import { Injectable } from "@nestjs/common";
import { BookingRepository } from "../../domain/booking/repositories/booking.repository";
import { ReqCreateReservationDto } from "../../domain/booking/dto/req-dto/req-create-reservation.dto";
import { ResReservationDto } from "../../domain/booking/dto/res-dto/res-reservation.dto";
import { ReqUpdateReservationDto } from "../../domain/booking/dto/req-dto/req-update-reservation.dto";
import { ResUpdateReservationDto } from "../../domain/booking/dto/res-dto/res-update-reservation.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class BookingMockAdapter extends BookingRepository {
	constructor() {
		super();
		logger.info('BookingMockAdapter was init');
	}

	async createReservation(data: ReqCreateReservationDto): Promise<void> {
		logger.verbose(`BookingMockAdapter was called createReservation method with param - ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getReservation(reservationId: string, userId?: string): Promise<ResReservationDto> {
		logger.verbose(`BookingMockAdapter was called getReservation method with params - ${JSON.stringify(reservationId)}, ${JSON.stringify(userId)}`);
		throw new Error(`${JSON.stringify(reservationId)}, ${JSON.stringify(userId)}`);
	}

	async getReservations(): Promise<ResReservationDto[]> {
		logger.verbose('BookingMockAdapter was called getReservations method without any params');
		throw new Error('Was called getReservation method');
	}

	async getReservationsByDate(date: Date, userId?: string): Promise<ResReservationDto[]> {
		logger.verbose(`BookingMockAdapter was called getReservationByDate method with params - ${JSON.stringify(date)}, ${JSON.stringify(userId)}`);
		throw new Error(`${JSON.stringify(date)}, ${JSON.stringify(userId)}`);
	}

	async updateReservation(reservationId: string, data: ReqUpdateReservationDto): Promise<ResUpdateReservationDto> {
		logger.verbose(`BookingMockAdapter was called updateReservation with params - ${JSON.stringify(reservationId)}, ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(reservationId)}, ${JSON.stringify(data)}`);
	}

	async deleteReservation(reservationId: string): Promise<void> {
		logger.verbose(`BookingMockAdapter was called deleteReservation with param - ${JSON.stringify(reservationId)}`);
		throw new Error(`${JSON.stringify(reservationId)}`);
	}
}
