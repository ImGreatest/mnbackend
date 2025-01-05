import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repository/user.repository";
import { ReqCreateUserDto } from "./dto/req-dto/req-create-user.dto";
import { ResUserDto } from "./dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "./dto/req-dto/req-update-user.dto";
import { ResUserByLoginDto } from "./dto/res-dto/res-user-by-login.dto";
import { ResUserByEmailDto } from "./dto/res-dto/res-user-by-email.dto";
import { ResUserByPhoneDto } from "./dto/res-dto/res-user-by-phone.dto";
import { ResUsersDto } from "./dto/res-dto/res-users.dto";

@Injectable()
/**
 * A class service for methods that work with users.
 *
 * @export
 * @class UserService
 */
export class UserService {
	/**
	 * @constructor
	 * @param userRepository
	 */
	constructor(private readonly userRepository: UserRepository) {}

	/**
	 * Service method for create the user instance.
	 *
	 * @instance
	 * @method createUser
	 * @param { ReqCreateUserDto } data
	 * @returns { Promise&lt;void> }
	 * @see { ReqCreateUserDto }
	 * @see { UserRepository }
	 * @see { ResUserDto }
	 */
	createUser(data: ReqCreateUserDto): Promise<ResUserDto> {
		return this.userRepository.createUser(data);
	}

	/**
	 * Service method for getting a specific user by his identifier.
	 *
	 * @instance
	 * @method getUser
	 * @param { string } userId
	 * @returns { Promise&lt;ResUserDto }
	 * @see { ResUserDto }
	 * @see { UserRepository }
	 */
	getUser(userId: string): Promise<ResUserDto> {
		return this.userRepository.getUser(userId);
	}

	/**
	 * Service method for getting the user by his login.
	 *
	 * @instance
	 * @method getUserByLogin
	 * @param { string } login
	 * @returns { Promise&lt;ResUserByLoginDto> }
	 * @see { ResUserByLoginDto }
	 * @see { UserRepository }
	 */
	getUserByLogin(login: string): Promise<ResUserByLoginDto> {
		return this.userRepository.getUserByLogin(login);
	}

	/**
	 * Service method for getting the user by his email.
	 *
	 * @instance
	 * @method getUserByEmail
	 * @param { string } email
	 * @returns { Promise&lt;ResUserByEmailDto> }
	 * @see { ResUserByEmailDto }
	 * @see { UserRepository }
	 */
	getUserByEmail(email: string): Promise<ResUserByEmailDto> {
		return this.userRepository.getUserByEmail(email);
	}

	/**
	 * Service method for getting the user by his phone.
	 *
	 * @instance
	 * @method getUserByPhone
	 * @param { string } phone
	 * @returns { Promise&lt;ResUserByPhoneDto }
	 * @see { ResUserByPhoneDto }
	 * @see { UserRepository }
	 */
	getUserByPhone(phone: string): Promise<ResUserByPhoneDto> {
		return this.userRepository.getUserByPhone(phone);
	}

	/**
	 * Service method for getting all users.
	 *
	 * @instance
	 * @method getUsers
	 * @returns { Promise&lt;ResUsersDto> }
	 * @see { ResUsersDto }
	 * @see { UserRepository }
	 */

	getUsers(): Promise<ResUsersDto> {
		return this.userRepository.getUsers();
	}

	/**
	 * Service method for updating the user.
	 *
	 * @instance
	 * @method updateUser
	 * @param { string } userId
	 * @param { ReqUpdateUserDto } data
	 * @returns { Promise&lt;void> }
	 * @see { ReqUpdateUserDto }
	 * @see { UserRepository }
	 */
	updateUser(userId: string, data: ReqUpdateUserDto): Promise<void> {
		return this.userRepository.updateUser(userId, data);
	}

	/**
	 * Service method for deleting the user.
	 *
	 * @instance
	 * @method deleteUser
	 * @param { string } userId
	 * @returns { Promise&lt;void> }
	 * @see { UserRepository }
	 */
	deleteUser(userId: string): Promise<void> {
		return this.userRepository.deleteUser(userId);
	}
}
