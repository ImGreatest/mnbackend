import { Module } from "@nestjs/common";
import { BucketService } from "./bucket.service";
import { BucketProvider } from "./providers/bucket.provider";

@Module({
	providers: [...BucketProvider],
	exports: [BucketService],
})
export class BucketModule {}
