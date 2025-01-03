import { BucketRepository } from "../../domain/bucket/repository/bucket.repository";
import { Injectable } from "@nestjs/common";
import { ReqCreateBucketDto } from "../../domain/bucket/dto/req-dto/req-create-bucket.dto";
import { ResBucketDto } from "../../domain/bucket/dto/res-dto/res-bucket.dto";
import { logger } from "../../../logger/logger";
import { ResBucketsDto } from "../../domain/bucket/dto/res-dto/res-buckets.dto";
import { ReqUpdateBucketDto } from "../../domain/bucket/dto/req-dto/req-update-bucket.dto";

@Injectable()
export class BucketMockAdapter extends BucketRepository {
	constructor() {
		super();
		logger.info('BucketMockAdapter was init');
	}

	async createBucket(data: ReqCreateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketMockAdapter was called createBucket with param - ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getBuckets(userId?: string, productId?: string): Promise<ResBucketsDto> {
		logger.verbose(`BucketMockAdapter was called getBuckets with params - ${JSON.stringify(userId)}, ${JSON.stringify(productId)}`);
		throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(productId)}`);
	}

	async updateBucket(id: string, data: ReqUpdateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketMockAdapter was called updateBucket with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(id)}, ${JSON.stringify(data)}`);
	}

	async clearBucket(id: string): Promise<void> {
		logger.verbose(`BucketMockAdapter was called with params - ${JSON.stringify(id)}`);
		throw new Error(`${JSON.stringify(id)}`);
	}
}