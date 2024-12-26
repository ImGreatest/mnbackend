import { CollectionMockAdapter } from "../../../libs/adapter/collection/collection.mock-adapter";
import { ReqCreateCollectionDto } from "../../../libs/domain/collection/dto/req-dto/req-create-collection.dto";
import { expect } from "chai";

const service = new CollectionMockAdapter();

test('should create collection', () => {
	const data: ReqCreateCollectionDto = {
		name: 'Test name collection',
	};

	expect(() => service.createCollection(data)).to.not.throw();
});
