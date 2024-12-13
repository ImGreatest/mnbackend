import { DateTime } from "luxon";

export interface IBonus {
	id: string;
	userId: string;
	percentage: number;
	bonusValue: number;
	startValue: number;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}
