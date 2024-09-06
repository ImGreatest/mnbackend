import { MockReqCreateProductDto } from "./mock-req-create-product.dto";
import { TMockReqProductExample } from "../../types/mock-req-product-example.type";

export const MockReqUpdateProductDto: Record<string, TMockReqProductExample> = {
	...MockReqCreateProductDto,
};
