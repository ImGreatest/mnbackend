import { Module } from "@nestjs/common";
import { BucketService } from "./bucket.service";
import { BucketRepository } from "./repository/bucket.repository";
import { BucketAdapter } from "../../adapter/bucket/bucket.adapter";

@Module({
	providers: [
		BucketService,
		{
			provide: BucketRepository,
			useClass: BucketAdapter,
		},
	],
	exports: [BucketService],
})
export class BucketModule {}
