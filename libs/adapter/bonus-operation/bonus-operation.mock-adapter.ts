import { Injectable } from "@nestjs/common";
import { BonusOperationsRepository } from "../../domain/bonus-operations/repositories/bonus-operations.repository";
import { ReqCreateBonusOperationDto } from "../../domain/bonus-operations/dto/req-dto/req-create-bonus-operation.dto";
import { ResBonusOperationsDto } from "../../domain/bonus-operations/dto/res-dto/res-bonus-operations.dto";
import { ResBonusOperationsAccountDto } from "../../domain/bonus-operations/dto/res-dto/res-bonus-operations-account.dto";

@Injectable()
export class BonusOperationMockAdapter extends BonusOperationsRepository {
  constructor() {
    super();
  }

  async createOperation(
    data: ReqCreateBonusOperationDto,
  ): Promise<ResBonusOperationsDto> {
    throw new Error(`${JSON.stringify(data)}`);
  }

  async getBonusOperation(id: string): Promise<ResBonusOperationsDto> {
    throw new Error(`${JSON.stringify(id)}`);
  }

  async getBonusOperationsAccount(
    accountId: string,
  ): Promise<ResBonusOperationsAccountDto> {
    throw new Error(`${JSON.stringify(accountId)}`);
  }
}
