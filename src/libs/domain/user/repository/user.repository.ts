import { Injectable } from "@nestjs/common";
import { Profile, User } from "../../../../common/models";
import { IReqCreateUser } from "../interfaces";
import { IResUsers } from "../interfaces";
import { IReqUpdateUser } from "../interfaces";

@Injectable()
export abstract class UserRepository {
	abstract createUser(data: IReqCreateUser): Promise<User & Profile>;

	abstract getUser(userId: string): Promise<User & Profile>;

	abstract getUsers(): Promise<IResUsers>;

	abstract getUserByLogin(login: string): Promise<User & Profile>;

	abstract getUserByPhone(phone: string): Promise<User & Profile>;

	abstract getUserByEmail(email: string): Promise<User & Profile>;

	abstract updateUser(userId: string, data: IReqUpdateUser): Promise<User & Profile>;
}
