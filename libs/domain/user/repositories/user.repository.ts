import { Injectable } from "@nestjs/common";
import { ReqCreateUserDto } from "../dto/req/req-create-user.dto";
import { ReqUpdateUserDto } from "../dto/req/req-update-user.dto";
import { ResUserDto } from "../dto/res/res-user.dto";
import { ResUpdatedUserDto } from "../dto/res/res-updated-user.dto";

@Injectable()
export abstract class UserRepository {
	abstract createUser(data: ReqCreateUserDto): Promise<void>;

	abstract getUser(userId: string): Promise<ResUserDto>;

	abstract getUsers(): Promise<ResUserDto[]>;

	abstract updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdatedUserDto>;

	abstract deleteUser(userId: string): Promise<void>;
}
