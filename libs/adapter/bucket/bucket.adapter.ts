import { BucketRepository } from "../../domain/bucket/repository/bucket.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma/prisma.service";
import { logger } from "../../../logger/logger";
import { ReqCreateBucketDto } from "../../domain/bucket/dto/req-dto/req-create-bucket.dto";
import { ResBucketDto } from "../../domain/bucket/dto/res-dto/res-bucket.dto";
import { ResBucketsDto } from "../../domain/bucket/dto/res-dto/res-buckets.dto";
import { ReqUpdateBucketDto } from "../../domain/bucket/dto/req-dto/req-update-bucket.dto";

@Injectable()
export class BucketAdapter extends BucketRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('BucketAdapter was init');
	}

	async createBucket(data: ReqCreateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketAdapter called createBucket method with param - ${JSON.stringify(data)}`);
		return this.prisma.bucket.create({ data });
	}

	async getBuckets(userId?: string, productId?: string): Promise<ResBucketsDto> {
		logger.verbose(`BucketAdapter called getBuckets method with params - ${JSON.stringify(userId)}, ${JSON.stringify(productId)}`);
		return {
			buckets: await this.prisma.bucket.findMany({
				where: {
					userId: userId,
					productId: productId,
				},
			}),
		}
	}

	async updateBucket(id: string, data: ReqUpdateBucketDto): Promise<ResBucketDto> {
		logger.verbose(`BucketAdapter called updateBucket method with param - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);
		return await this.prisma.bucket.update({
			where: { id: id },
			data: data,
		});
	}

	// TODO does method clearing bucket
	async clearBucket(id: string): Promise<void> {
		logger.verbose(`BucketAdapter called clearBucket method with param - ${JSON.stringify(id)}`);
		throw new Error();
		// await this.prisma.bucket.update({
		// 	where: { id: id },
		// 	data: {  }
		// });
	}
}
