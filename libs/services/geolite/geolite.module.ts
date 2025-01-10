import { Module } from "@nestjs/common";
import { GeoLiteService } from "./geolite.service";

@Module({
	providers: [GeoLiteService],
	exports: [GeoLiteService],
})
export class GeoLiteModule {}
