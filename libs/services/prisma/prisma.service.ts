import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { logger } from "../../../logger/logger";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
    } catch (e) {
      logger.error("Fail to connect to the database", e);
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  async cleanDatabase(): Promise<void> {
    const models = Object.keys(this).filter(
      (key) => typeof this[key] === "object" && "deleteMany" in this[key],
    );

    try {
      /* eslint-disable */
      await this.$transaction(
        models.map((modelKey) => (this[modelKey] as any).deleteMany()),
      );
      logger.info("Database cleaned successfully");
    } catch (e) {
      logger.error("Error cleaning database", e);
      throw e;
    }
  }
}
