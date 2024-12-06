import { Module } from '@nestjs/common';
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [
    PrismaModule,
    ControllersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
