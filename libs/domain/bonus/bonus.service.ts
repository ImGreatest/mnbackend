import { Injectable } from "@nestjs/common";
import { BonusRepository } from "./repositories/bonus.repository";
import { ReqCreateBonusAccountDto } from "./dto/req-create-bonus-account.dto";
import { ResBonusDto } from "./dto/res-bonus.dto";
import { ReqUpdateBonusAccountDto } from "./dto/req-update-bonus-account.dto";

@Injectable()
export class BonusService {
  constructor(private readonly bonusRep: BonusRepository) {}

  createBonusAccount(data: ReqCreateBonusAccountDto): Promise<ResBonusDto> {
    return this.bonusRep.createBonusAccount(data);
  }

  getBonusAccount(userId?: string): Promise<ResBonusDto> {
    return this.bonusRep.getBonusAccount(userId);
  }

  popUpBonusAccount(userId: string, amount: number): Promise<ResBonusDto> {
    return this.bonusRep.popUpBonusAccount(userId, amount);
  }

  writeOffBonusAccount(userId: string, amount: number): Promise<ResBonusDto> {
    return this.bonusRep.writeOffBonusAccount(userId, amount);
  }

  updateBonusAccount(
    userId: string,
    data: ReqUpdateBonusAccountDto,
  ): Promise<ResBonusDto> {
    return this.bonusRep.updateBonusAccount(userId, data);
  }
}
