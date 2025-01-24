import { Injectable } from "@nestjs/common";
import { BonusOperationsRepository } from "./repositories/bonus-operations.repository";
import { ReqCreateBonusOperationDto } from "./dto/req-dto/req-create-bonus-operation.dto";
import { ResBonusOperationsDto } from "./dto/res-dto/res-bonus-operations.dto";
import { ResBonusOperationsAccountDto } from "./dto/res-dto/res-bonus-operations-account.dto";

@Injectable()
export class BonusOperationsService {
  constructor(private readonly bonusOperationRep: BonusOperationsRepository) {}

  createOperation(
    data: ReqCreateBonusOperationDto,
  ): Promise<ResBonusOperationsDto> {
    return this.bonusOperationRep.createOperation(data);
  }

  getBonusOperation(id: string): Promise<ResBonusOperationsDto> {
    return this.bonusOperationRep.getBonusOperation(id);
  }

  getBonusOperationsAccount(
    accountId: string,
  ): Promise<ResBonusOperationsAccountDto> {
    return this.bonusOperationRep.getBonusOperationsAccount(accountId);
  }
}
