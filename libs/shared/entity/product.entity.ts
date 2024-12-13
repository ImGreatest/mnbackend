import { DateTime } from "luxon";

export interface IProduct {
	id: string;
	name: string;
	cost: number;
	compound: string;
	collectionId: string;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}
