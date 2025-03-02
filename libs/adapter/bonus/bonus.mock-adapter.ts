import { Injectable } from "@nestjs/common";
import { BonusRepository } from "../../domain/bonus/repositories/bonus.repository";
import { ReqCreateBonusAccountDto } from "../../domain/bonus/dto/req-create-bonus-account.dto";
import { ResBonusDto } from "../../domain/bonus/dto/res-bonus.dto";
import { ReqUpdateBonusAccountDto } from "../../domain/bonus/dto/req-update-bonus-account.dto";

@Injectable()
export class BonusMockAdapter extends BonusRepository {
  constructor() {
    super();
  }

  async createBonusAccount(
    data: ReqCreateBonusAccountDto,
  ): Promise<ResBonusDto> {
    throw new Error();
  }

  async getBonusAccount(id?: string, userId?: string): Promise<ResBonusDto> {
    throw new Error();
  }

  async popUpBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto> {
    throw new Error();
  }

  async writeOffBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto> {
    throw new Error();
  }

  async updateBonusAccount(
    userId: string,
    data: ReqUpdateBonusAccountDto,
  ): Promise<ResBonusDto> {
    throw new Error();
  }
}
