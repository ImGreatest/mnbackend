import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./services/auth/auth.module";

@Module({
  imports: [PrismaModule, AuthModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
