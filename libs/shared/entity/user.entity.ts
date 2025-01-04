import { ERole } from "@prisma/client";

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
	role: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
