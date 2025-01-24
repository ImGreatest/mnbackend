import { OmitType } from "@nestjs/swagger";
import { ReqCreateBonusAccountDto } from "./req-create-bonus-account.dto";

export class ReqUpdateBonusAccountDto extends OmitType(
  ReqCreateBonusAccountDto,
  ["userId"] as const,
) {}
