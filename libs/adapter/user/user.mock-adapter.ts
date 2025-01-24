import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/user/repositories/user.repository";
import { ReqCreateUserDto } from "../../domain/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../domain/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../domain/user/dto/req-dto/req-update-user.dto";
import { ResUserByLoginDto } from "../../domain/user/dto/res-dto/res-user-by-login.dto";
import { ResUserByEmailDto } from "../../domain/user/dto/res-dto/res-user-by-email.dto";
import { ResUserByPhoneDto } from "../../domain/user/dto/res-dto/res-user-by-phone.dto";
import { ResUsersDto } from "../../domain/user/dto/res-dto/res-users.dto";
import { ResCreatedUserDto } from "../../domain/user/dto/res-dto/res-created-user.dto";
import { ResUpdatedUserDto } from "../../domain/user/dto/res-dto/res-updated-user.dto";

@Injectable()
/**
 * A class for mock the UserAdapter
 *
 * @export
 * @class { UserMockAdapter }
 * @extends { UserRepository }
 * @see { UserRepository }
 */
export class UserMockAdapter extends UserRepository {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Mock method a creation the user instance.
   *
   * @async
   * @instance
   * @method createUser
   * @param data
   * @returns { Promise&lt;ResCreatedUserDto> }
   * @see { ReqCreateUserDto }
   * @see { UserRepository }
   */
  async createUser(data: ReqCreateUserDto): Promise<ResCreatedUserDto> {
    throw new Error(`${JSON.stringify(data)}`);
  }

  /**
   * Mock method for get a specific user by his identifier.
   *
   * @async
   * @instance
   * @method getUser
   * @param { string } userId
   * @returns { Promise&lt;ResUserDto> }
   * @see { ResUserDto }
   * @see { UserRepository }
   */
  async getUser(userId: string): Promise<ResUserDto> {
    throw new Error(`${JSON.stringify(userId)}`);
  }

  /**
   * Mock method for get user by his login.
   *
   * @async
   * @instance
   * @method getUserByLogin
   * @param { string } login
   * @returns { Promise&lt;ResUserByLoginDto> }
   * @see { ResUserByLoginDto }
   * @see { UserRepository }
   */
  async getUserByLogin(login: string): Promise<ResUserByLoginDto> {
    throw new Error(`${JSON.stringify(login)}`);
  }

  /**
   * Mock method for get user by his email.
   *
   * @async
   * @instance
   * @method getUserByEmail
   * @param { string } email
   * @returns { Promise&lt;ResUserByEmailDto> }
   * @see { ResUserByEmailDto }
   * @see { UserRepository }
   */
  async getUserByEmail(email: string): Promise<ResUserByEmailDto> {
    throw new Error(`${JSON.stringify(email)}`);
  }

  /**
   * Mock method for get user by his phone.
   *
   * @async
   * @instance
   * @method getUserByPhone
   * @param { string } phone
   * @returns { Promise&lt;ResUserByPhoneDto> }
   * @see { ResUserByPhoneDto }
   * @see { UserRepository }
   */
  async getUserByPhone(phone: string): Promise<ResUserByPhoneDto> {
    throw new Error(`${JSON.stringify(phone)}`);
  }

  /**
   * Mock method for gets all users
   *
   * @async
   * @instance
   * @method getUsers
   * @returns { Promise&lt;ResUsersDto> }
   * @see { ResUsersDto }
   * @see { UserRepository }
   */
  async getUsers(): Promise<ResUsersDto> {
    throw new Error();
  }

  /**
   * Mock method for update user instance.
   *
   * @async
   * @instance
   * @method updateUser
   * @param { string } userId
   * @param { ReqUpdateUserDto } data
   * @returns { Promise&lt;ResUpdatedUserDto> }
   * @see { ReqUpdateUserDto }
   * @see { ResUpdatedUserDto }
   * @see { UserRepository }
   */
  async updateUser(
    userId: string,
    data: ReqUpdateUserDto,
  ): Promise<ResUpdatedUserDto> {
    throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(data)}`);
  }
}
