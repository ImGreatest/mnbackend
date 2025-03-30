import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/user/repository/user.repository";
import { CryptoService } from "../../../services/crypto/crypto.service";
import { PrismaService } from "../../../services/prisma/prisma.service";
import {
	ReqCreateUserDto,
	ReqUpdateUserDto,
	ResCreatedUserDto,
	ResGetUserByEmailDto, ResGetUserByLoginDto, ResGetUserByPhoneDto,
	ResGetUserDto, ResUpdateUserDto,
	ResUsersDto
} from "../../../common/dto";
import { ERole } from "@prisma/client";
import { ProfileService } from "../../domain/profile/profile.service";
import { Profile, User } from "../../../common/models";
import { IReqCreateUser } from "../../domain/user/interfaces";

@Injectable()
export class UserAdapter extends UserRepository {
	constructor(
		private readonly crypto: CryptoService,
		private readonly prisma: PrismaService,
		private readonly profileService: ProfileService,
	) {
		super();
	}

	async createUser(data: IReqCreateUser): Promise<User & Profile> {
		await this.checkUniqueness(data);

		const user = await this.prisma.user.create({
			data: {
				username: data.username,
				login: data.login,
				email: data.email,
				phone: data.phone,
				password: this.crypto.getHash(data.password),
				role: ERole[data.role],
			},
		});

		const { id, ...userData } = user;

		return {
			id,
			...userData,
			profile: await this.profileService.getProfile(id),
		}
	}

	async getUser(userId: string): Promise<ResGetUserDto> {
		return this.prisma.user.findUnique({
			where: { id: userId },
		});
	}

	async getUserByEmail(email: string): Promise<ResGetUserByEmailDto> {
		return this.prisma.user.findUnique({
			where: { email: email },
		})
	}

	async getUserByPhone(phone: string): Promise<ResGetUserByPhoneDto> {
		return this.prisma.user.findUnique({
			where: { phone: phone },
		});
	}

	async getUserByLogin(login: string): Promise<ResGetUserByLoginDto> {
		return this.prisma.user.findUnique({
			where: { login: login },
		});
	}

	async getUsers(): Promise<ResUsersDto> {
		return { users: await this.prisma.user.findMany() };
	}

	async updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdateUserDto> {
		await this.checkUniqueness(data);

		return await this.prisma.user.update({
			where: { id: userId },
			data: {
				...data,
				role: ERole[data.role],
			},
		});
	}

	async checkUniqueness(data: ReqCreateUserDto | ReqUpdateUserDto) {
		const [emailUser, loginUser, phoneUser] = await this.prisma.$transaction([
			this.prisma.user.findUnique({ where: { email: data.email } }),
			this.prisma.user.findUnique({ where: { login: data.login } }),
			this.prisma.user.findUnique({ where: { phone: data.phone } }),
		]);

		if (emailUser) {
			throw new Error(`User with email - ${emailUser.email} already exists`);
		}

		if (loginUser) {
			throw new Error(`User with login - ${loginUser.login} already exists`);
		}

		if (phoneUser) {
			throw new Error(`User with phone - ${phoneUser.phone} already exists`);
		}
	}
}
