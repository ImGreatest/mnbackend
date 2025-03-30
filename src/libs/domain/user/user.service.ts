import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repository/user.repository";
import { IReqCreateUser, IReqUpdateUser, IResUsers } from "./interfaces";
import { Profile, User } from "../../../common/models";

@Injectable()
export class UserService {
	constructor(private readonly rep: UserRepository) {}

	createUser(data: IReqCreateUser): Promise<User & Profile> {
		return this.rep.createUser(data);
	}

	getUser(userId: string): Promise<User & Profile> {
		return this.rep.getUser(userId);
	}

	getUsers(): Promise<IResUsers> {
		return this.rep.getUsers();
	}

	getUserByEmail(email: string): Promise<User & Profile> {
		return this.rep.getUserByEmail(email);
	}

	getUserByLogin(login: string): Promise<User & Profile> {
		return this.rep.getUserByLogin(login);
	}

	getUserByPhone(phone: string): Promise<User & Profile> {
		return this.rep.getUserByPhone(phone);
	}

	updateUser(userId: string, data: IReqUpdateUser): Promise<User & Profile> {
		return this.rep.updateUser(userId, data);
	}
}
