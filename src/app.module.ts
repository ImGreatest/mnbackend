import { Module } from "@nestjs/common";
import { ControllersModule } from "./controllers/controllers.module";
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./services/auth/auth.module";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { geoLiteConfig } from "../config/config";
import { GeoIpBlocks } from "../libs/shared/entity/geoip_blocks.entity";
import { GeoIpLocations } from "../libs/shared/entity/geoip_locations.entity";
import { GeoIpCity } from "../libs/shared/entity/geoip-city.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => {
        return {
          type: 'postgres',
          host: cfg.get<string | number>('DATABASE_GEOLITE_HOST').toString() || geoLiteConfig.DatabaseHost.toString(),
          port: cfg.get<number>('DATABASE_GEOLITE_PORT') || geoLiteConfig.DatabasePort,
          username: cfg.get<string>('DATABASE_GEOLITE_USER') || geoLiteConfig.DatabaseUser,
          password: cfg.get<string>('DATABASE_GEOLITE_PASSWORD') || geoLiteConfig.DatabasePassword,
          database: cfg.get<string>('DATABASE_GEOLITE_URL') || geoLiteConfig.DatabaseURL,
          entities: [GeoIpBlocks, GeoIpLocations, GeoIpCity],
          synchronize: true,
        }
      },
    }),
    PrismaModule,
    AuthModule,
    ControllersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
