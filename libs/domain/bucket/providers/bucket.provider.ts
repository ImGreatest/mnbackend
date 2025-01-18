import { Provider } from "@nestjs/common";
import { BucketService } from "../bucket.service";
import { BucketRepository } from "../repositories/bucket.repository";
import { BucketAdapter } from "../../../adapter/bucket/bucket.adapter";

export const BucketProvider: Provider[] = [
	BucketService,
	{
		provide: BucketRepository,
		useClass: BucketAdapter,
	},
];
