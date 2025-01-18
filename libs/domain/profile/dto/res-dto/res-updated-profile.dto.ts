import { OmitType } from "@nestjs/swagger";
import { ResProfileDto } from "./res-profile.dto";

export class ResUpdatedProfileDto extends OmitType(ResProfileDto, ['userId'] as const) {}
