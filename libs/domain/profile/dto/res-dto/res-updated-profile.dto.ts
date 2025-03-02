import { OmitType } from "@nestjs/swagger";
import { ResProfileDto } from "./res-profile.dto";

export class ResUpdateProfileDto extends OmitType(ResProfileDto, [
  "userId",
] as const) {}
