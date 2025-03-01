import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { RabbitMQModule } from "../libs/services/rabbitmq/rabbitMQ.module";

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RabbitMQModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
