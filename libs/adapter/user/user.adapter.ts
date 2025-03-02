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
import { ERole } from "@prisma/client";
import { ResCreatedUserDto } from "../../domain/user/dto/res-dto/res-created-user.dto";
import { ProfileService } from "../../domain/profile/profile.service";
import {
  NotFoundProfileException,
  NotFoundUserByEmailException,
  NotFoundUserByIdentifierException,
  NotFoundUserByLoginException,
  NotFoundUserByPhoneException,
  NotFoundUserException, UpdateUserException
} from "../../shared/exceptions/user.exception";

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
   * @param profileService
   */
  constructor(
    private readonly prisma: PrismaService,
    private readonly crypto: CryptoService,
    private readonly profileService: ProfileService,
  ) {
    logger.info("UserAdapter was init");
    super();
  }

  /**
   * Create the user instance
   *
   * @async
   * @instance
   * @method createUser
   * @param { ReqCreateUserDto } data
   * @type { function(data: ReqCreateUserDto): Promise@lt;ResCreatedUserDto> }
   * @returns { Promise&ResCreatedUserDto> }
   * @see { ReqCreateUserDto }
   * @see { ProfileService }
   * @see { UserRepository }
   * @see { ResUserDto }
   */
  async createUser(data: ReqCreateUserDto): Promise<ResCreatedUserDto> {
    logger.info(
      `Adapter call - createUser method params - ${JSON.stringify(data)}`,
    );

    // check user by email
    await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })
      .then(() => {
        throw new NotFoundUserException(
          `User with email - ${JSON.stringify(data.email)} already exist`,
        );
      });

    // check user by phone
    await this.prisma.user.findUnique({
      where: {
        phone: data.phone,
      },
    })
      .then(() => {
        throw new NotFoundUserByPhoneException({ phone: data.phone });
      });

    try {
      const user = await this.prisma.user.create({
        data: {
          login: data.login,
          email: data.email,
          phone: data.phone,
          password: this.crypto.getHash(data.password),
          role: ERole[data.role],
        },
      });
      const { id, ...userData } = user;

      return {
        ...userData,
        profile: await this.profileService.createProfile({
          userId: id,
          ...data,
        }),
      };
    } catch (e) {
      logger.error("Error creating user or profile", e);
      throw e;
    }
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
    logger.info(
      `Adapter call - getUser method params - ${JSON.stringify(userId)}`,
    );

    return this.prisma.user.findUnique({
      where: { id: userId },
    })
      .then(data => data)
      .catch((e) => {
        logger.error("User is not found!", e);
        throw new NotFoundUserByIdentifierException({ identifier: userId });
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
    logger.info(
      `Adapter call - getUserByLogin method params - ${JSON.stringify(login)}`,
    );

    try {
      const user = await this.prisma.user.findUnique({
        where: { login: login },
      })
        .then(data => data)
        .catch((err) => {
          logger.error('User is not found!', err);
          throw new NotFoundUserByLoginException({ login: login });
        });

      return {
        ...user,
        profile: await this.profileService.getProfile(user.id)
          .then(data => data)
          .catch((e) => {
            logger.error("Error is not found", e);
            throw new NotFoundProfileException({ userId: user.id });
          })
      };
    } catch (e) {
      logger.error("Error creating user or profile", e);
      throw e;
    }
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
   * @see { ProfileService }
   * @see { UserRepository }
   */
  async getUserByEmail(email: string): Promise<ResUserByEmailDto> {
    logger.info(
      `Adapter call - getUserByEmail method params - ${JSON.stringify(email)}`,
    );

    try {
      const user = await this.prisma.user.findUnique({
        where: { email: email },
      })
        .then(data => data)
        .catch(err => {
          logger.error('User is not found!', err);
          throw new NotFoundUserByEmailException({ email: email });
        })

      return {
        ...user,
        profile: await this.profileService.getProfile(user.id)
          .then(data => data)
          .catch((e) => {
            logger.error("Profile is not found!", e);
            throw new NotFoundProfileException({ userId: user.id });
          })
      };
    } catch (e) {
      logger.error("Error creating user or profile", e);
      throw e;
    }
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
   * @see { ProfileService }
   * @see { UserRepository }
   */
  async getUserByPhone(phone: string): Promise<ResUserByPhoneDto> {
    logger.info(
      `Adapter call - getUserByPhone method params - ${JSON.stringify(phone)}`,
    );

    try {
      const user = await this.prisma.user.findUnique({
        where: { phone: phone },
      })
        .then(data => data)
        .catch((e) => {
          logger.error("User is not found!", e);
          throw new NotFoundUserByPhoneException({ phone: phone });
        });

      return {
        ...user,
        profile: await this.profileService.getProfile(user.id)
          .then(data => data)
          .catch((e) => {
            logger.error("Profile is not found!", e);
            throw new NotFoundProfileException({ userId: user.id });
          }),
      };
    } catch (e) {
      logger.error("Error creating user or profile", e);
      throw e;
    }
  }

  /**
   * Get all users
   *
   * @async
   * @instance
   * @method getUsers
   * @type { function(): Promise@lt;ResUsersDto> }
   * @returns { Promise&lt;ResUsersDto>> }
   * @see { ResUsersDto }
   * @see { UserRepository }
   */
  async getUsers(): Promise<ResUsersDto> {
    logger.info("Adapter call - getUsers method without params");

    return {
      users: await this.prisma.user.findMany()
        .then(data => data)
        .catch((e) => {
          logger.error("Users is not found!", e);
          throw new Error('Users is not found!');
        }),
    };
  }

  /**
   * Update the user instance
   *
   * @async
   * @instance
   * @method updateUser
   * @param { string } userId
   * @param { ReqUpdateUserDto } data
   * @type { function(userId: string, data: ReqUpdateUserDto): Promise@lt;ResUserDto> }
   * @returns { Promise&lt;ResUserDto> }
   * @see { ReqUpdateUserDto }
   * @see { UserRepository }
   */
  async updateUser(
    userId: string,
    data: ReqUpdateUserDto,
  ): Promise<ResUserDto> {
    logger.info(
      `Adapter call - updateUser method, params - ${JSON.stringify(userId)}, ${JSON.stringify(data)}`,
    );

    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
        role: ERole[data.role],
      },
    })
      .then(data => data)
      .catch((err) => {
        logger.error("Happened error while updating user", err);
        throw new UpdateUserException({ userId: userId, data: JSON.stringify(data) });
      });
  }
}
