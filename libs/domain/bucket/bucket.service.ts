import { Injectable } from "@nestjs/common";
import { BucketRepository } from "./repositories/bucket.repository";
import { ReqCreateBucketDto } from "./dto/req-dto/req-create-bucket.dto";
import { ResBucketDto } from "./dto/res-dto/res-bucket.dto";
import { ResBucketsDto } from "./dto/res-dto/res-buckets.dto";
import { ReqUpdateBucketDto } from "./dto/req-dto/req-update-bucket.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class BucketService {
	constructor(private readonly bucketRep: BucketRepository) {
		logger.info('BucketService was init');
	}

	createBucket(data: ReqCreateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketService was called createBucket method with param - ${JSON.stringify(data)}`);
		return this.bucketRep.createBucket(data);
	}

	getBuckets(userId?: string, productId?: string): Promise<ResBucketsDto> {
		logger.verbose(`BucketService was called getBuckets method with params - ${JSON.stringify(userId)}, ${JSON.stringify(productId)}`);
		return this.bucketRep.getBuckets(userId, productId);
	}

	updateBucket(id: string, data: ReqUpdateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketService was called updateBucket method with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);
		return this.bucketRep.updateBucket(id, data);
	}

	clearBucket(id: string): Promise<void> {
		logger.verbose(`BucketService was called clearBucket method with params - ${JSON.stringify(id)}`);
		return this.bucketRep.clearBucket(id);
	}
}
