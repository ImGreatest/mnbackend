import { TMockReqProduct } from "../../types/mock-req-product.type";
import { MockDataReqProduct } from "../const/mock-data-req-product";

export const MockReqProductDto: Record<string, TMockReqProduct> = {
	firstExample: {
		summary: 'First example',
		value: MockDataReqProduct,
	},
	secondExample: {
		summary: 'Second Example',
		value: MockDataReqProduct,
	}
};
