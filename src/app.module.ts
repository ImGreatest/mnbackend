import { Module } from '@nestjs/common';
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { RedisModuleWrapper } from "../libs/services/redis/redis.module";

@Module({
  imports: [
    PrismaModule,
    RedisModuleWrapper,
    ControllersModule,
  ],
})
export class AppModule {}
