import { Injectable } from "@nestjs/common";
import { ReqCreateUserDto } from "../dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../dto/req-dto/req-update-user.dto";
import { ResUserByPhoneDto } from "../dto/res-dto/res-user-by-phone.dto";
import { ResUserByEmailDto } from "../dto/res-dto/res-user-by-email.dto";
import { ResUserByLoginDto } from "../dto/res-dto/res-user-by-login.dto";
import { ResUsersDto } from "../dto/res-dto/res-users.dto";
import { ResCreatedUserDto } from "../dto/res-dto/res-created-user.dto";
import { ResUpdateUserDto } from "../dto/res-dto/res-update-user.dto";

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
   * @instance
   * @method createUser
   * @param data
   * @return { Promise&lt;ResCreatedUserDto> }
   * @throws { Error } If was given invalid data or user creation fail.
   * @see { ReqCreateUserDto }
   * @see { ResCreatedUserDto }
   */
  abstract createUser(data: ReqCreateUserDto): Promise<ResCreatedUserDto>;

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
   * @returns { Promise&lt;ResUserDto> }
   * @see { ResUserDto }
   */
  abstract getUsers(): Promise<ResUsersDto>;

  /**
   * Updates the user instance.
   *
   * @abstract
   * @instance
   * @method updateUser
   * @param userId
   * @param data
   * @throws { Error } If the user updating by invalid input data. User the updating fail.
   * @returns { Promise&lt;ResUpdateUserDto> }
   * @see { ReqUpdateUserDto }
   * @see { ResUpdateUserDto }
   * @see { ResUserDto }
   */
  abstract updateUser(
    userId: string,
    data: ReqUpdateUserDto,
  ): Promise<ResUpdateUserDto>;
}
