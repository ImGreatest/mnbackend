import { Provider } from "@nestjs/common";
import { PromoService } from "../promo.service";
import { PromoRepository } from "../repositories/promo.repository";
import { PromoAdapter } from "../../../adapter/promo/promo.adapter";

export const PromoProvider: Provider[] = [
  PromoService,
  {
    provide: PromoRepository,
    useClass: PromoAdapter,
  },
];
