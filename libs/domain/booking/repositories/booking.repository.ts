import { Injectable } from "@nestjs/common";
import { ReqCreateReservationDto } from "../dto/req-dto/req-create-reservation.dto";
import { ResReservationDto } from "../dto/res-dto/res-reservation.dto";
import { ResReservationsDto } from "../dto/res-dto/res-reservations.dto";
import { ReqUpdateReservationDto } from "../dto/req-dto/req-update-reservation.dto";
import { ResUpdateReservationDto } from "../dto/res-dto/res-update-reservation.dto";
import { ResReservationsByDateDto } from "../dto/res-dto/res-reservations-by-date.dto";

@Injectable()
export abstract class BookingRepository {
  abstract createReservation(data: ReqCreateReservationDto): Promise<void>;

  abstract getReservation(
    reservationId: string,
    userId?: string,
  ): Promise<ResReservationDto>;

  abstract getReservations(): Promise<ResReservationsDto[]>;

  abstract getReservationsByDate(
    date: Date,
    userId?: string,
  ): Promise<ResReservationsByDateDto[]>;

  abstract updateReservation(
    reservationId: string,
    data: ReqUpdateReservationDto,
  ): Promise<ResUpdateReservationDto>;

  abstract deleteReservation(reservationId: string): Promise<void>;
}
