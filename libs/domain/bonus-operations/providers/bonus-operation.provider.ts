import { Provider } from "@nestjs/common";
import { BonusOperationsService } from "../bonus-operations.service";
import { BonusOperationsRepository } from "../repositories/bonus-operations.repository";
import { BonusOperationAdapter } from "../../../adapter/bonus-operation/bonus-operation.adapter";

export const BonusOperationProvider: Provider[] = [
  BonusOperationsService,
  {
    provide: BonusOperationsRepository,
    useClass: BonusOperationAdapter,
  },
];
