import { OmitType } from "@nestjs/swagger";
import { ResReservationDto } from "./res-reservation.dto";

export class ResUpdateReservationDto extends OmitType(ResReservationDto, ["id"] as const) {}
