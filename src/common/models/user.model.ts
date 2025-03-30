import { contains } from "class-validator";
import { EEmailService } from "../enums";
import { IUser } from "../entities";

export class User implements Omit<IUser, "id" | "createdAt" | "updatedAt"> {
	username: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	role: string;

	constructor(data: Partial<User>) {
		this.username = data.username ?? '';
		this.login = data.login ?? '';
		this.email = data.email ?? '';
		this.phone = data.phone ?? '';
		this.password = data.password ?? '';
		this.role = data.role ?? 'client';
	}

	private isValidPassword(): boolean {
		if (this.password.length < 8 ) return false;
		const uniqueChars = new Set(this.password.split(''));

		return uniqueChars.size > 4;
	}

	canBeCreated(existingUsers: User[]): boolean {
		if (!this.isValidPassword()) {
			throw new Error('Password must be at least 8 characters long and contain at least 4 unique characters');
		}

		if (!contains(this.email, "@")) {
			throw new Error("Email must be contain @ symbol");
		}

		if (!Object.keys(EEmailService).some(service => contains(this.email, service))) {
			throw new Error("Email contain an unknown mail service");
		}

		if (this.login && existingUsers.some(user => user.login === this.login)) {
			throw new Error('Login must be unique');
		}

		if (existingUsers.some(user => user.email === this.email)) {
			throw new Error('Email must be unique');
		}

		if (this.phone && existingUsers.some(user => user.phone === this.phone)) {
			throw new Error('Phone must be unique');
		}

		return true;
	}
}