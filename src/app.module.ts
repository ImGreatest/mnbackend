import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { RmqModule } from "../libs/services/rabbitmq/rmq.module";

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RmqModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
