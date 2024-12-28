import { IFavorite } from "../../../shared/entity/favorite.entity";
import { faker } from "@faker-js/faker";

export const MockReqFavoriteRelation: Omit<IFavorite, "id" | "createdAt" | "updatedAt" | "deletedAt"> = {
	userId: faker.string.uuid(),
	productId: faker.string.uuid(),
}
