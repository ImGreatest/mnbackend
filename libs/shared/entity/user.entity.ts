import { ERole } from "../enum/role.enum";
import { DateTime } from "luxon";

export interface IUser {
	id: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	firstname?: string;
	middleName?: string;
	lastname?: string;
	address?: string;
	alternateContact?: string;
	role: ERole;
	createdAt: DateTime;
	updatedAt?: DateTime;
	deletedAt?: DateTime;
}
