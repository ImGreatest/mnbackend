import { Injectable } from "@nestjs/common";
import { ReqCreateReservationDto } from "../dto/req/req-create-reservation.dto";
import { ResReservationDto } from "../dto/res/res-reservation.dto";
import { ReqUpdateReservationDto } from "../dto/req/req-update-reservation.dto";
import { ResUpdatedReservationDto } from "../dto/res/res-updated-reservation.dto";

@Injectable()
export abstract class BookingRepository {
	abstract createReservation(data: ReqCreateReservationDto): Promise<void>;

	abstract getReservation(reservationId: string, userId?: string): Promise<ResReservationDto>;

	abstract getReservations(): Promise<ResReservationDto[]>;

	abstract getReservationsByDate(date: Date, userId?: string): Promise<ResReservationDto[]>;

	abstract updateReservation(reservationId: string, data: ReqUpdateReservationDto): Promise<ResUpdatedReservationDto>;

	abstract deleteReservation(reservationId: string): Promise<void>;
}
