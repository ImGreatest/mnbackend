import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/user/repositories/user.repository";
import { ReqCreateUserDto } from "../../domain/user/dto/req/req-create-user.dto";
import { ResUserDto } from "../../domain/user/dto/res/res-user.dto";
import { ResUpdatedUserDto } from "../../domain/user/dto/res/res-updated-user.dto";
import { ReqUpdateUserDto } from "../../domain/user/dto/req/req-update-user.dto";

@Injectable()
export class UserAdapter extends UserRepository {
	constructor() {
		super();
	}

	async createUser(data: ReqCreateUserDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getUser(userId: string): Promise<ResUserDto> {
		throw new Error(`${userId}`);
	}

	async getUsers(): Promise<ResUserDto[]> {
		throw new Error();
	}

	async updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdatedUserDto> {
		throw new Error(`${userId}, ${{ ...data }}`);
	}

	async deleteUser(userId: string): Promise<void> {
		throw new Error(`${userId}`);
	}
}
