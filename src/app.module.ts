import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthGuard } from "./services/auth/guards/auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { AuthModule } from "./services/auth/auth.module";

@Module({
  imports: [PrismaModule, AuthModule, ControllersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})
export class AppModule {}
