import { ResReservationDto } from "../../dto/res-dto/res-reservation.dto";
import { mockResReservationDto } from "./mock-res-reservation.dto";

export type TUpdatedReservationDto = Omit<ResReservationDto, "id">;

export const MockResUpdatedReservationDto: TUpdatedReservationDto = {
	...mockResReservationDto,
};
