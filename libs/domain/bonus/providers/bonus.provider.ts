import { Provider } from "@nestjs/common";
import { BonusService } from "../bonus.service";
import { BonusRepository } from "../repositories/bonus.repository";
import { BonusAdapter } from "../../../adapter/bonus/bonus.adapter";

export const BonusProvider: Provider[] = [
  BonusService,
  {
    provide: BonusRepository,
    useClass: BonusAdapter,
  },
];
