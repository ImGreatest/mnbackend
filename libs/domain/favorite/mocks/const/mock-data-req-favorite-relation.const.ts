import { faker } from "@faker-js/faker";
import { ReqCreateRelationDto } from "../../dto/req-dto/req-create-relation.dto";

export const MockDataReqFavoriteRelation: ReqCreateRelationDto = {
	userId: faker.string.uuid(),
	productId: faker.string.uuid(),
}
