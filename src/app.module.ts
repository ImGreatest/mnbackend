import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [PrismaModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
