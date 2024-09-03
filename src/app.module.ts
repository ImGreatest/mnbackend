import { Module } from '@nestjs/common';
import { ControllersModule } from "./controllers/controllers.module";
import { SequelizeModule } from "../libs/services/sequelize/sequelize.module";

@Module({
  imports: [SequelizeModule, ControllersModule],
})
export class AppModule {}
