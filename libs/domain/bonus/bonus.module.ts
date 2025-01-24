import { Module } from "@nestjs/common";
import { BonusService } from "./bonus.service";
import { BonusProvider } from "./providers/bonus.provider";

@Module({
  providers: [...BonusProvider],
  exports: [BonusService],
})
export class BonusModule {}
