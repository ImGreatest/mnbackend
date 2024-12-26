import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/user/repositories/user.repository";
import { ReqCreateUserDto } from "../../domain/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../domain/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../domain/user/dto/req-dto/req-update-user.dto";
import { PrismaService } from "../../services/prisma/prisma.service";
import { CryptoService } from "../../services/crypto/crypto.service";
import { logger } from "../../../logger/logger";
import { ResUserByLoginDto } from "../../domain/user/dto/res-dto/res-user-by-login.dto";
import { ResUserByEmailDto } from "../../domain/user/dto/res-dto/res-user-by-email.dto";
import { ResUserByPhoneDto } from "../../domain/user/dto/res-dto/res-user-by-phone.dto";
import { ResUsersDto } from "../../domain/user/dto/res-dto/res-users.dto";

@Injectable()
/**
 * A class that realise a logical the methods that working with users.
 *
 * @export
 * @class UserAdapter
 * @extends { UserRepository }
 * @see { UserRepository }
 */
export class UserAdapter extends UserRepository {
	/**
	 * @constructor
	 * @param prisma
	 * @param crypto
	 */
	constructor(
		private readonly prisma: PrismaService,
		private readonly crypto: CryptoService,
	) {
		super();
	}

	/**
	 * Create the user instance
	 *
	 * @async
	 * @instance
	 * @method createUser
	 * @param { ReqCreateUserDto } data
	 * @type { function(data: ReqCreateUserDto): Promise@lt;void> }
	 * @returns { Promise&ltvoid> }
	 * @see { ReqCreateUserDto }
	 * @see { UserRepository }
	 */
	async createUser(data: ReqCreateUserDto): Promise<void> {
		logger.info(`Adapter call - createUser method params - ${{ ...data }}`);

		await this.prisma.user.create({
			data: {
				...data,
				password: this.crypto.getHash(data.password),
			},
		});
	}

	/**
	 * Get a specific user by his identifier
	 *
	 * @async
	 * @instance
	 * @method getUser
	 * @param { string } userId
	 * @type { function(userId: string): Promise@lt;ResUserDto> }
	 * @returns { Promise&lt;ResUserDto> }
	 * @see { ResUserDto }
	 * @see { UserRepository }
	 */
	async getUser(userId: string): Promise<ResUserDto> {
		logger.info(`Adapter call - getUser method params - ${userId}`);

		return this.prisma.user.findUnique({
			where: {
				id: userId,
			}
		});
	}

	/**
	 * Get a specific user by his login
	 *
	 * @async
	 * @instance
	 * @method getUserByLogin
	 * @param { string } login
	 * @type { function(login: string): Promise@lt;ResUserByLoginDto> }
	 * @returns { Promise&lt;ResUserByLoginDto> }
	 * @see { ResUserByLoginDto }
	 * @see { UserRepository }
	 */
	async getUserByLogin(login: string): Promise<ResUserByLoginDto> {
		logger.info(`Adapter call - getUserByLogin method params - ${login}`);

		return this.prisma.user.findUnique({
			where: {
				login: login,
			},
		});
	}

	/**
	 * Get currently user by his email
	 *
	 * @async
	 * @instance
	 * @method getUserByEmail
	 * @param { string } email
	 * @type { function(email: string): Promise@lt;ResUserByEmailDto> }
	 * @returns { Promise&lt;ResUserByEmailDto> }
	 * @see { ResUserByEmailDto }
	 * @see { UserRepository }
	 */
	async getUserByEmail(email: string): Promise<ResUserByEmailDto> {
		logger.info(`Adapter call - getUserByEmail method params - ${email}`);

		return this.prisma.user.findUnique({
			where: {
				email: email,
			},
		});
	}

	/**
	 * Get currently user by his phone
	 *
	 * @async
	 * @instance
	 * @method getUserByPhone
	 * @param { string } phone
	 * @type { function(phone: string): Promise@lt;ResUserByPhoneDto> }
	 * @returns { Promise&lt;ResUserByPhoneDto> }
	 * @see { ResUserByPhoneDto }
	 * @see { UserRepository }
	 */
	async getUserByPhone(phone: string): Promise<ResUserByPhoneDto> {
		logger.info(`Adapter call - getUserByPhone method params - ${phone}`);

		return this.prisma.user.findUnique({
			where: {
				phone: phone,
			},
		});
	}

	/**
	 * Get all users
	 *
	 * @async
	 * @instance
	 * @method getUsers
	 * @type { function(): Promise@lt;ResUserDto[]> }
	 * @returns { Promise&lt;ResUsersDto>> }
	 * @see { ResUsersDto }
	 * @see { UserRepository }
	 */
	async getUsers(): Promise<ResUsersDto> {
		logger.info('Adapter call - getUsers method');



		return {
			users: await this.prisma.user.findMany(),
		}
	}

	/**
	 * Update the user instance
	 *
	 * @async
	 * @instance
	 * @method updateUser
	 * @param { string } userId
	 * @param { ReqUpdateUserDto } data
	 * @type { function(userId: string, data: ReqUpdateUserDto): Promise@lt;void> }
	 * @returns { Promise&lt;void> }
	 * @see { ReqUpdateUserDto }
	 * @see { UserRepository }
	 */
	async updateUser(userId: string, data: ReqUpdateUserDto): Promise<void> {
		logger.info(`Adapter call - updateUser method, params - ${userId}, ${{ ...data }}`);

		await this.prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				...data,
			},
		});
	}

	/**
	 * Delete the user instance
	 *
	 * @async
	 * @instance
	 * @method deleteUser
	 * @param { string } userId
	 * @type { function(userId: string): Promise&lt;void> }
	 * @returns { Promise&lt;void> }
	 * @see { UserRepository }
	 */
	async deleteUser(userId: string): Promise<void> {
		logger.info(`Adapter call - deleteUser method, params - ${userId}`);

		await this.prisma.user.delete({
			where: {
				id: userId,
			},
		});
	}
}
