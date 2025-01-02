import { Module } from "@nestjs/common";
import { BucketController } from "./bucket.controller";
import { BucketModule } from "../../../libs/domain/bucket/bucket.module";

@Module({
	imports: [BucketModule],
	controllers: [BucketController],
})
export class BucketControllerModule {}
