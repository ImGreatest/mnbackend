import { IProfile } from "../entities";

export class Profile implements Omit<IProfile, "userId" | "createdAt" | "updatedAt"> {
	firstname?: string;
	middleName?: string;
	lastname?: string;
	address?: string;
	alternateContact?: string;

	constructor(data: Partial<Profile>) {
		this.firstname = data.firstname || '';
		this.middleName = data.middleName || '';
		this.lastname = data.lastname || '';
		this.address = data.address || '';
		this.alternateContact = data.alternateContact || '';
	}
}
