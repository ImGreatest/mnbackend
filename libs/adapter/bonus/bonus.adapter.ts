import { Injectable } from "@nestjs/common";
import { BonusRepository } from "../../domain/bonus/repositories/bonus.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { logger } from "../../../logger/logger";
import { ReqCreateBonusAccountDto } from "../../domain/bonus/dto/req-create-bonus-account.dto";
import { ResBonusDto } from "../../domain/bonus/dto/res-bonus.dto";
import { ReqUpdateBonusAccountDto } from "../../domain/bonus/dto/req-update-bonus-account.dto";

@Injectable()
export class BonusAdapter extends BonusRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    logger.info("BonusAdapter was init");
  }

  async createBonusAccount(
    data: ReqCreateBonusAccountDto,
  ): Promise<ResBonusDto> {
    logger.verbose(
      `BonusAdapter was called createBonusAccount method with param -${JSON.stringify(data)}`,
    );

    return await this.prisma.bonus.create({ data });
  }

  async getBonusAccount(userId: string): Promise<ResBonusDto> {
    logger.verbose(
      `BonusAdapter was called getBonusAccount method with params - ${JSON.stringify(userId)}`,
    );

    return await this.prisma.bonus.findUnique({
      where: { userId: userId },
    });
  }

  async popUpBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto> {
    logger.verbose(
      `BonusAdapter was called popUpBonusAccount method with params - ${JSON.stringify(userId)}, ${JSON.stringify(amount)}`,
    );

    return await this.prisma.bonus.update({
      where: { userId: userId },
      data: {
        bonusValue:
          amount +
          (await this.prisma.bonus
            .findUnique({
              where: { userId: userId },
            })
            .then((res) => res.bonusValue)),
      },
    });
  }

  async writeOffBonusAccount(
    userId: string,
    amount: number,
  ): Promise<ResBonusDto> {
    logger.verbose(
      `BonusAdapter was called writeOffBonusAccount method with params - ${JSON.stringify(userId)}, ${JSON.stringify(amount)}`,
    );

    return await this.prisma.bonus.update({
      where: { userId: userId },
      data: {
        bonusValue: await this.prisma.bonus
          .findUnique({
            where: { userId: userId },
          })
          .then((res) => res.bonusValue - amount),
      },
    });
  }

  async updateBonusAccount(
    userId: string,
    data: ReqUpdateBonusAccountDto,
  ): Promise<ResBonusDto> {
    logger.verbose(
      `BonusAdapter was called updateBonusAccount method with params - ${JSON.stringify(userId)}, ${JSON.stringify(data)}`,
    );

    return await this.prisma.bonus.update({
      where: { userId: userId },
      data: data,
    });
  }
}
