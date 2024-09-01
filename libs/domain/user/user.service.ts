import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { ReqCreateUserDto } from "./dto/req/req-create-user.dto";
import { ResUserDto } from "./dto/res/res-user.dto";
import { ReqUpdateUserDto } from "./dto/req/req-update-user.dto";
import { ResUpdatedUserDto } from "./dto/res/res-updated-user.dto";

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(data: ReqCreateUserDto): Promise<void> {
		return this.userRepository.createUser(data);
	}

	async getUser(userId: string): Promise<ResUserDto> {
		return this.userRepository.getUser(userId);
	}

	async getUsers(): Promise<ResUserDto[]> {
		return this.userRepository.getUsers();
	}

	async updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdatedUserDto> {
		return this.userRepository.updateUser(userId, data);
	}

	async deleteUser(userId: string): Promise<void> {
		return this.userRepository.deleteUser(userId);
	}
}
