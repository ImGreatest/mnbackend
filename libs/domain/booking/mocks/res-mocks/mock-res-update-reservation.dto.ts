import { ResReservationDto } from "../../dto/res-dto/res-reservation.dto";
import { MockResReservationDto } from "./mock-res-reservation.dto";

export type TUpdatedReservationDto = Omit<ResReservationDto, "id">;

export const MockResUpdateReservationDto: TUpdatedReservationDto = {
  ...MockResReservationDto,
};
