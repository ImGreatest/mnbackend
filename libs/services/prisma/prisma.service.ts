import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client/extension";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.$use(this.softDeleteMiddleware);
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
