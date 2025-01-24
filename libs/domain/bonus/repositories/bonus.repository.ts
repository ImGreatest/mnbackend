import { Injectable } from "@nestjs/common";
import { ReqCreateBonusAccountDto } from "../dto/req-create-bonus-account.dto";
import { ResBonusDto } from "../dto/res-bonus.dto";
import { ReqUpdateBonusAccountDto } from "../dto/req-update-bonus-account.dto";

@Injectable()
export abstract class BonusRepository {
  abstract createBonusAccount(
    data: ReqCreateBonusAccountDto,
  ): Promise<ResBonusDto>;

  abstract getBonusAccount(userId?: string): Promise<ResBonusDto>;

  abstract popUpBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto>;

  abstract writeOffBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto>;

  abstract updateBonusAccount(
    userId: string,
    data: ReqUpdateBonusAccountDto,
  ): Promise<ResBonusDto>;
}
