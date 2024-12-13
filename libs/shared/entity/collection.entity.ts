import { DateTime } from "luxon";

export interface ICollection {
	id: string;
	name: string;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}