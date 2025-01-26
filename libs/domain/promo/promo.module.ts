import { Module } from "@nestjs/common";
import { PromoService } from "./promo.service";
import { PromoProvider } from "./providers/promo.provider";

@Module({
  providers: [...PromoProvider],
  exports: [PromoService],
})
export class PromoModule {}
