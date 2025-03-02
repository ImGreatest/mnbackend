import { Injectable } from "@nestjs/common";
import { PromoRepository } from "./repositories/promo.repository";
import { ResUpdatePromoDto } from "./dto/res-dto/res-update-promo.dto";
import { ResPromoDto } from "./dto/res-dto/res-promo.dto";
import { ReqCreatePromoDto } from "./dto/req-dto/req-create-promo.dto";
import { ReqUpdatePromoDto } from "./dto/req-dto/req-update-promo.dto";

@Injectable()
export class PromoService {
  constructor(private readonly promoRep: PromoRepository) {}

  createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto> {
    return this.promoRep.createPromo(data);
  }

  getPromo(id: string): Promise<ResPromoDto> {
    return this.promoRep.getPromo(id);
  }

  updatePromo(id: string, data: ReqUpdatePromoDto): Promise<ResUpdatePromoDto> {
    return this.promoRep.updatePromo(id, data);
  }

  deletePromo(id: string): Promise<void> {
    return this.promoRep.deletePromo(id);
  }
}
