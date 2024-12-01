import { Module } from '@nestjs/common';
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";

@Module({
  imports: [
    PrismaModule,
    ControllersModule,
  ],
})
export class AppModule {}
