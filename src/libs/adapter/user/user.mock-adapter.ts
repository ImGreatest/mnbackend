import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/user/repository/user.repository";
import {
	ReqCreateUserDto, ReqUpdateUserDto,
	ResCreatedUserDto, ResGetUserByEmailDto,
	ResGetUserByLoginDto,
	ResGetUserByPhoneDto,
	ResGetUserDto,
	ResUpdateUserDto,
	ResUsersDto
} from "../../../common/dto";

@Injectable()
export class UserMockAdapter extends UserRepository {
	constructor() {
		super();
	}

	async createUser(data: ReqCreateUserDto): Promise<ResCreatedUserDto> {
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getUser(userId: string): Promise<ResGetUserDto> {
		throw new Error(`${JSON.stringify(userId)}`);
	}

	async getUsers(): Promise<ResUsersDto> {
		throw new Error();
	}

	async getUserByLogin(login: string): Promise<ResGetUserByLoginDto> {
		throw new Error(`${JSON.stringify(login)}`);
	}

	async getUserByPhone(phone: string): Promise<ResGetUserByPhoneDto> {
		throw new Error(`${JSON.stringify(phone)}`);
	}

	async getUserByEmail(email: string): Promise<ResGetUserByEmailDto> {
		throw new Error(`${JSON.stringify(email)}`);
	}

	async updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdateUserDto> {
		throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(data)}`);
	}
}
