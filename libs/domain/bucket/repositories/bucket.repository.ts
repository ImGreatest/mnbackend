import { Injectable } from "@nestjs/common";
import { ResBucketDto } from "../dto/res-dto/res-bucket.dto";
import { ReqCreateBucketDto } from "../dto/req-dto/req-create-bucket.dto";
import { ResBucketsDto } from "../dto/res-dto/res-buckets.dto";
import { ReqUpdateBucketDto } from "../dto/req-dto/req-update-bucket.dto";

@Injectable()
export abstract class BucketRepository {
  abstract createBucket(data: ReqCreateBucketDto): Promise<ResBucketDto>;

  abstract getBuckets(
    userId?: string,
    productId?: string,
  ): Promise<ResBucketsDto>;

  abstract updateBucket(
    id: string,
    data: ReqUpdateBucketDto,
  ): Promise<ResBucketDto>;

  abstract clearBucket(id: string): Promise<void>;
}
