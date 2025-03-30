export interface IUser {
	id: string;
	username: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	role: string;
	createdAt: Date;
	updatedAt?: Date;
}
