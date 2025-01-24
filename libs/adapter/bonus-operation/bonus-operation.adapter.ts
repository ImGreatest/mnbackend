import { BonusOperationsRepository } from "../../domain/bonus-operations/repositories/bonus-operations.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateBonusOperationDto } from "../../domain/bonus-operations/dto/req-dto/req-create-bonus-operation.dto";
import { ResBonusOperationsDto } from "../../domain/bonus-operations/dto/res-dto/res-bonus-operations.dto";
import { logger } from "../../../logger/logger";
import { ResBonusOperationsAccountDto } from "../../domain/bonus-operations/dto/res-dto/res-bonus-operations-account.dto";

@Injectable()
export class BonusOperationAdapter extends BonusOperationsRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    logger.info("BonusOperationAdapter was init");
  }

  async createOperation(
    data: ReqCreateBonusOperationDto,
  ): Promise<ResBonusOperationsDto> {
    logger.verbose(
      `BonusOperationAdapter was called createOperation method with param - ${JSON.stringify(data)}`,
    );

    return await this.prisma.bonusOperations.create({ data });
  }

  async getBonusOperation(id: string): Promise<ResBonusOperationsDto> {
    logger.verbose(
      `BonusOperationAdapter was called getBonusOperation method with param - ${JSON.stringify(id)}`,
    );

    return await this.prisma.bonusOperations.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getBonusOperationsAccount(
    accountId: string,
  ): Promise<ResBonusOperationsAccountDto> {
    logger.verbose(
      `BonusOperationAdapter was called getBonusOperationsAccount method with param - ${JSON.stringify(accountId)}`,
    );

    return {
      operations: await this.prisma.bonusOperations.findMany({
        where: {
          bonusAccountId: accountId,
        },
      }),
    };
  }
}
