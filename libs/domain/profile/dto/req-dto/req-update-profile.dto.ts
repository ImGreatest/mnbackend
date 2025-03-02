import { ReqCreateProfileDto } from "./req-create-profile.dto";
import { OmitType } from "@nestjs/swagger";

export class ReqUpdateProfileDto extends OmitType(ReqCreateProfileDto, [
  "userId",
] as const) {}
