import { ERole } from "@prisma/client";

export interface IUser {
	id: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	role: ERole;
	createdAt: Date;
	updatedAt?: Date;
}
