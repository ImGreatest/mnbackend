import { Injectable } from "@nestjs/common";
import { ReqCreateUserDto } from "../dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../dto/req-dto/req-update-user.dto";
import { ResUserByPhoneDto } from "../dto/res-dto/res-user-by-phone.dto";
import { ResUserByEmailDto } from "../dto/res-dto/res-user-by-email.dto";
import { ResUserByLoginDto } from "../dto/res-dto/res-user-by-login.dto";

@Injectable()
/**
 * A class that contains all abstract the methods that work with users.
 *
 * @export
 * @abstract
 * @class { UserRepository }
 */
export abstract class UserRepository {
	/**
	 * Create a new user instance
	 *
	 * @abstract
	 * @method createUser
	 * @instance
	 * @param data
	 * @return { Promise&lt;void> }
	 * @throws { Error } If was given invalid data or user creation fail.
	 * @see { ReqCreateUserDto }
	 */
	abstract createUser(data: ReqCreateUserDto): Promise<void>;

	/**
	 * Get a specific user by his identifier
	 *
	 * @abstract
	 * @instance
	 * @method getUser
	 * @param userId
	 * @throws { Error } If the user getting by invalid input data. User the getting fail.
	 * @returns { Promise&lt;ResUserDto> }
	 * @see { ResUserDto }
	 */
	abstract getUser(userId: string): Promise<ResUserDto>;

	/**
	 * Get a specific user by his login
	 *
	 * @abstract
	 * @instance
	 * @method getUserByLogin
	 * @param login
	 * @throws { Error } If the user getting by invalid input data. User the getting fail.
	 * @returns { Promise&lt;ResUserByLoginDto> }
	 * @see { ResUserByLoginDto }
	 */
	abstract getUserByLogin(login: string): Promise<ResUserByLoginDto>;

	/**
	 * Get a specific user by his email
	 *
	 * @abstract
	 * @instance
	 * @method getUserByEmail
	 * @param email
	 * @throws { Error } If the user getting by invalid input the data. User getting fail.
	 * @return { Promise&lt;ResUserByEmailDto> }
	 * @see { ResUserByEmailDto }
	 */
	abstract getUserByEmail(email: string): Promise<ResUserByEmailDto>;

	/**
	 * Get a specific user by his phone.
	 *
	 * @abstract
	 * @instance
	 * @method getUserByPhone
	 * @param phone
	 * @throws { Error } If the user getting by invalid input data. User the getting fail.
	 * @return { Promise<ResUserByPhoneDto> }
	 * @see { ResUserByPhoneDto }
	 */
	abstract getUserByPhone(phone: string): Promise<ResUserByPhoneDto>;

	/**
	 * Get all users.
	 *
	 * @abstract
	 * @instance
	 * @method getUsers
	 * @throws { Error } if users the getting fail.
	 * @returns { Promise&lt;Array&lt;ResUserDto> }
	 * @see { ResUserDto }
	 */
	abstract getUsers(): Promise<ResUserDto[]>;

	/**
	 * Updates the user instance.
	 *
	 * @abstract
	 * @instance
	 * @method updateUser
	 * @param userId
	 * @param data
	 * @throws { Error } If the user updating by invalid input data. User the updating fail.
	 * @returns { Promise&lt;void> }
	 * @see { ReqUpdateUserDto }
	 */
	abstract updateUser(userId: string, data: ReqUpdateUserDto): Promise<void>;

	/**
	 * Deletes the user instance.
	 *
	 * @abstract
	 * @instance
	 * @method deleteUser
	 * @param userId
	 * @throws { Error } If the user deleting by invalid input data. User the deleting fail.
	 * @returns { Promise&lt;void> }
	 */
	abstract deleteUser(userId: string): Promise<void>;
}
