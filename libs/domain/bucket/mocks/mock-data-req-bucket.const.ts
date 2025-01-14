import { ReqCreateBucketDto } from "../dto/req-dto/req-create-bucket.dto";
import { faker } from "@faker-js/faker";

export const MockDataReqBucket: ReqCreateBucketDto = {
	userId: faker.string.uuid(),
	productId: faker.string.uuid(),
}
