import { Injectable } from "@nestjs/common";
import { ResPromoDto } from "../dto/res-promo.dto";
import { ReqCreatePromoDto } from "../dto/req-create-promo.dto";
import { ReqUpdatePromoDto } from "../dto/req-update-promo.dto";

@Injectable()
export abstract class PromoRepository {
  abstract createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto>;

  abstract getPromo(id: string): Promise<ResPromoDto>;

  abstract updatePromo(
    id: string,
    data: ReqUpdatePromoDto,
  ): Promise<ResPromoDto>;

  abstract deletePromo(id: string): Promise<void>;
}
