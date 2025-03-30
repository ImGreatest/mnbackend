import { OmitType } from "@nestjs/swagger";
import { ReqCreateProfileDto } from "./req-create-profile.dto";

export class ReqUpdateProfileDto extends OmitType(ReqCreateProfileDto, ["userId"] as const) {}
