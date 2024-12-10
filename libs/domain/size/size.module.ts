import { Module } from "@nestjs/common";
import { SizeService } from "./size.service";
import { SizeRepository } from "./repository/size.repository";
import { SizeAdapter } from "../../adapter/size/size.adapter";

@Module({
	providers: [
		SizeService,
		{
			provide: SizeRepository,
			useClass: SizeAdapter,
		}
	],
	exports: [SizeService],
})
export class SizeModule {}
