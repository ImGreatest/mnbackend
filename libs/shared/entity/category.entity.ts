import { DateTime } from "luxon";

export interface ICategory {
	id: string;
	name: string;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}
