import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { BucketService } from "../../../libs/domain/bucket/bucket.service";
import { ReqCreateBucketDto } from "../../../libs/domain/bucket/dto/req-dto/req-create-bucket.dto";
import { ResBucketDto } from "../../../libs/domain/bucket/dto/res-dto/res-bucket.dto";
import { ResBucketsDto } from "../../../libs/domain/bucket/dto/res-dto/res-buckets.dto";
import { ReqUpdateBucketDto } from "../../../libs/domain/bucket/dto/req-dto/req-update-bucket.dto";

@ApiTags("bucket")
@ApiBearerAuth()
@Controller("bucket")
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Post("create-bucket")
  createBucket(@Body() data: ReqCreateBucketDto): Promise<ResBucketDto> {
    return this.bucketService.createBucket(data);
  }

  @Get("get-buckets")
  getBuckets(
    @Query() userId?: string,
    @Query() productId?: string,
  ): Promise<ResBucketsDto> {
    return this.bucketService.getBuckets(userId, productId);
  }

  @Post("update-bucket/:id")
  updateBucket(
    @Param("id") id: string,
    @Body() data: ReqUpdateBucketDto,
  ): Promise<ResBucketDto> {
    return this.bucketService.updateBucket(id, data);
  }

  @Delete("clear-bucket")
  clearBucket(id: string): Promise<void> {
    return this.bucketService.clearBucket(id);
  }
}
