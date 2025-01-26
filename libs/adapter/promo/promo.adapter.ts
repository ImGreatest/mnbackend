import { Injectable } from "@nestjs/common";
import { PromoRepository } from "../../domain/promo/repositories/promo.repository";
import { ReqCreatePromoDto } from "../../domain/promo/dto/req-create-promo.dto";
import { ResPromoDto } from "../../domain/promo/dto/res-promo.dto";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqUpdatePromoDto } from "../../domain/promo/dto/req-update-promo.dto";

@Injectable()
export class PromoAdapter extends PromoRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto> {
    return this.prisma.promo.create({ data });
  }

  async getPromo(id: string): Promise<ResPromoDto> {
    return this.prisma.promo.findUnique({
      where: { id: id },
    });
  }

  async updatePromo(id: string, data: ReqUpdatePromoDto): Promise<ResPromoDto> {
    return this.prisma.promo.update({
      where: { id: id },
      data: data,
    });
  }

  async deletePromo(id: string): Promise<void> {
    await this.prisma.promo.delete({
      where: { id: id },
    });
  }
}
