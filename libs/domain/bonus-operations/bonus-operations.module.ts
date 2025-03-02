import { Module } from "@nestjs/common";
import { BonusOperationProvider } from "./providers/bonus-operation.provider";
import { BonusOperationsService } from "./bonus-operations.service";

@Module({
  providers: [...BonusOperationProvider],
  exports: [BonusOperationsService],
})
export class BonusOperationsModule {}
