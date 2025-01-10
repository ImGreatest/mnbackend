import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeoIpCity } from "../../shared/entity/geoip-city.entity";
import { GeoIpBlocks } from "../../shared/entity/geoip_blocks.entity";
import { GeoIpLocations } from "../../shared/entity/geoip_locations.entity";

@Global()
@Module({
	imports: [
		TypeOrmModule.forFeature([
			GeoIpCity,
			GeoIpBlocks,
			GeoIpLocations,
		]),
	],
	exports: [TypeOrmModule],
})
export class TypeormModule {}
