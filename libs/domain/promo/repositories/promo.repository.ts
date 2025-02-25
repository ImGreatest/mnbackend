import { Injectable } from "@nestjs/common";
import { ResPromoDto } from "../dto/res-dto/res-promo.dto";
import { ReqCreatePromoDto } from "../dto/req-dto/req-create-promo.dto";
import { ReqUpdatePromoDto } from "../dto/req-dto/req-update-promo.dto";
import { ResUpdatePromoDto } from "../dto/res-dto/res-update-promo.dto";

@Injectable()
export abstract class PromoRepository {
  abstract createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto>;

  abstract getPromo(id: string): Promise<ResPromoDto>;

  abstract updatePromo(
    id: string,
    data: ReqUpdatePromoDto,
  ): Promise<ResUpdatePromoDto>;

  abstract deletePromo(id: string): Promise<void>;
}
