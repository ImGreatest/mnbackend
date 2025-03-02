import { Injectable } from "@nestjs/common";
import { PromoRepository } from "../../domain/promo/repositories/promo.repository";
import { ReqCreatePromoDto } from "../../domain/promo/dto/req-dto/req-create-promo.dto";
import { ResPromoDto } from "../../domain/promo/dto/res-dto/res-promo.dto";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqUpdatePromoDto } from "../../domain/promo/dto/req-dto/req-update-promo.dto";
import { logger } from "../../../logger/logger";
import { ResUpdatePromoDto } from "../../domain/promo/dto/res-dto/res-update-promo.dto";

@Injectable()
export class PromoAdapter extends PromoRepository {
  constructor(private readonly prisma: PrismaService) {
    logger.info("PromoAdapter was init");
    super();
  }

  async createPromo(data: ReqCreatePromoDto): Promise<ResPromoDto> {
    logger.info(`PromoAdapter was called createPromo method with param - ${JSON.stringify(data)}`);

    return this.prisma.promo.create({ data });
  }

  async getPromo(id: string): Promise<ResPromoDto> {
    logger.info(`PromoAdapter was called getPromo method with param - ${JSON.stringify(id)}`);

    return this.prisma.promo.findUnique({
      where: { id: id },
    });
  }

  async updatePromo(id: string, data: ReqUpdatePromoDto): Promise<ResUpdatePromoDto> {
    logger.info(`PromoAdapter was called updatePromo method with param - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);

    return this.prisma.promo.update({
      where: { id: id },
      data: data,
    });
  }

  async deletePromo(id: string): Promise<void> {
    logger.info(`PromoAdapter was called deletePromo method with param - ${JSON.stringify(id)}`);

    try {
      await this.prisma.promo.delete({
        where: { id: id },
      });
    } catch (e) {
      logger.info("Deleting promo is error");
    }
  }
}
