import { Injectable } from "@nestjs/common";
import { ResBonusOperationsDto } from "../dto/res-dto/res-bonus-operations.dto";
import { ReqCreateBonusOperationDto } from "../dto/req-dto/req-create-bonus-operation.dto";
import { ResBonusOperationsAccountDto } from "../dto/res-dto/res-bonus-operations-account.dto";

@Injectable()
export abstract class BonusOperationsRepository {
  abstract createOperation(
    data: ReqCreateBonusOperationDto,
  ): Promise<ResBonusOperationsDto>;

  abstract getBonusOperation(id: string): Promise<ResBonusOperationsDto>;

  abstract getBonusOperationsAccount(
    accountId: string,
  ): Promise<ResBonusOperationsAccountDto>;
}
