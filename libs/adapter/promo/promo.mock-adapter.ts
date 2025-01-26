import { PromoRepository } from "../../domain/promo/repositories/promo.repository";
import { Injectable } from "@nestjs/common";
import { ReqCreatePromoDto } from "../../domain/promo/dto/req-create-promo.dto";
import { ResPromoDto } from "../../domain/promo/dto/res-promo.dto";
import { ReqUpdatePromoDto } from "../../domain/promo/dto/req-update-promo.dto";

@Injectable()
export class PromoMockAdapter extends PromoRepository {
  async createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto> {
    throw new Error(`${JSON.stringify(data)}`);
  }

  async getPromo(id: string): Promise<ResPromoDto> {
    throw new Error(`${JSON.stringify(id)}`);
  }

  async updatePromo(id: string, data: ReqUpdatePromoDto): Promise<ResPromoDto> {
    throw new Error(`${JSON.stringify(id)}, ${JSON.stringify(data)}`);
  }

  async deletePromo(id: string): Promise<void> {
    throw new Error(`${JSON.stringify(id)}`);
  }
}
