import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client"
import { logger } from "../../../logger/logger";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
    } catch (e) {
      logger.error('Fail to connect to the database', e);
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
