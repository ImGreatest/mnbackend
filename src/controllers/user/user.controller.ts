import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody, ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UserService } from "../../../libs/domain/user/user.service";
import { ReqCreateUserDto } from "../../../libs/domain/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../../libs/domain/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../../libs/domain/user/dto/req-dto/req-update-user.dto";
import { ResUpdateUserDto } from "../../../libs/domain/user/dto/res-dto/res-update-user.dto";
import { MockReqUser } from "../../../libs/domain/user/mocks/req-mocks/mock-req-user";
import { faker } from "@faker-js/faker";
import { MockResUser } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user";
import { ResUserByLoginDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-login.dto";
import { ResUserByEmailDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-email.dto";
import { ResUserByPhoneDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-phone.dto";
import { MockResUserByLogin } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-login";
import { MockResUserByEmail } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-email";
import { MockResUserByPhone } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-phone";
import { MockReqUpdateUser } from "../../../libs/domain/user/mocks/req-mocks/mock-req-update-user";
import { ResUsersDto } from "../../../libs/domain/user/dto/res-dto/res-users.dto";
import { RolesGuard } from "../../services/auth/guards/roles.guard";
import { Roles } from "../../../libs/common/decorators/roles.decorator";
import { ResCreatedUserDto } from "../../../libs/domain/user/dto/res-dto/res-created-user.dto";
import { ProfileService } from "../../../libs/domain/profile/profile.service";
import { ResProfileDto } from "../../../libs/domain/profile/dto/res-dto/res-profile.dto";
import { ReqUpdateProfileDto } from "../../../libs/domain/profile/dto/req-dto/req-update-profile.dto";
import { ResUpdateProfileDto } from "../../../libs/domain/profile/dto/res-dto/res-updated-profile.dto";
import { MockResUpdateUser } from "../../../libs/domain/user/mocks/res-mocks/mock-res-update-user";
import { MockResProfile } from "../../../libs/domain/profile/mocks/res-mocks/mock-res-profile";

@ApiTags("user")
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller("user")
/**
 * A class controller for method that work with users.
 *
 * @export
 * @class { UserController }
 */
export class UserController {
  /**
   * @constructor
   * @param userService
   * @param profileService
   */
  constructor(
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
  ) {}

  @Roles("admin")
  @Post("create-user")
  @ApiBody({
    type: ReqCreateUserDto,
    required: true,
    description: "Data for create new user",
    examples: MockReqUser,
  })
  @ApiOperation({ summary: "Do request for creating user" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Successfully to create user",
    type: null,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for create the user instance.
   *
   * @instance
   * @method createUser
   * @param { ReqCreateUserDto } data
   * @return { Promise&lt;ResCreatedUserDto> }
   * @see { ReqCreateUserDto }
   * @see { UserService }
   * @see { ResCreatedUserDto }
   */
  createUser(@Body() data: ReqCreateUserDto): Promise<ResCreatedUserDto> {
    return this.userService.createUser(data);
  }

  @Get("user/:id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
    description: "Identifier user",
    example: faker.string.uuid(),
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Return user data by identifier",
    type: ResUserDto,
    isArray: false,
    example: MockResUser,
  })
  @ApiOperation({ summary: "Do request for getting user by identifier" })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting user by his identifier.
   *
   * @instance
   * @method getUser
   * @param { string } userId
   * @return { Promise&lt;ResUserDto> }
   * @see { ResUserDto }
   * @see { UserService }
   */
  getUser(@Param("id") userId: string): Promise<ResUserDto> {
    return this.userService.getUser(userId);
  }

  @Get("get-user-by-login/:login")
  @ApiParam({
    name: "login",
    type: String,
    required: true,
    description: "The User login",
  })
  @ApiOperation({ summary: "Do request for getting user by login" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns user by input login.",
    type: ResUserByLoginDto,
    isArray: false,
    example: MockResUserByLogin,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting user by his login.
   *
   * @instance
   * @method getUserByLogin
   * @param { string } login
   * @return { Promise&lt;ResUserByLoginDto> }
   * @see { ResUserByLoginDto }
   * @see { UserService }
   */
  getUserByLogin(@Param("login") login: string): Promise<ResUserByLoginDto> {
    return this.userService.getUserByLogin(login);
  }

  @Get("get-user-by-email/:email")
  @ApiParam({
    name: "email",
    type: String,
    required: true,
    description: "The user email.",
  })
  @ApiOperation({ summary: "Do request for getting user by email" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns user by input email.",
    type: ResUserByPhoneDto,
    isArray: false,
    example: MockResUserByEmail,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data.",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found.",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting the user by his email.
   *
   * @instance
   * @method getUserByEmail
   * @param { string } email
   * @return { Promise&lt;ResUserByEmailDto> }
   * @see { ResUserByEmailDto }
   * @see { UserService }
   */
  getUserByEmail(@Param("email") email: string): Promise<ResUserByEmailDto> {
    return this.userService.getUserByEmail(email);
  }

  @Get("get-user-by-phone/:phone")
  @ApiParam({
    name: "phone",
    type: String,
    required: true,
    description: "The user phone.",
  })
  @ApiOperation({ summary: "Do request for getting user by phone" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns user by his phone.",
    type: ResUserByPhoneDto,
    isArray: false,
    example: MockResUserByPhone,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data.",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found.",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting the user by phone.
   *
   * @instance
   * @method getUserByPhone
   * @param { string } phone
   * @returns { Promise&lt;ResUserByPhoneDto> }
   * @see { ResUserByPhoneDto }
   * @see { UserService }
   */
  getUserByPhone(@Param("phone") phone: string): Promise<ResUserByPhoneDto> {
    return this.userService.getUserByPhone(phone);
  }

  @Get("users")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Return all users",
    type: ResUserDto,
    isArray: true,
    example: MockResUser,
  })
  @ApiOperation({ summary: "Do request for getting all users" })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Users is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting the all users.
   *
   * @instance
   * @method getUsers
   * @return { Promise&lt;ResUsersDto> }
   * @see { ResUsersDto }
   * @see { UserService }
   */
  getUsers(): Promise<ResUsersDto> {
    return this.userService.getUsers();
  }

  @Post("update-user/:id")
  @ApiParam({
    name: "id",
    required: true,
    type: String,
    description: "Identifier user which will be updated",
    example: faker.string.uuid(),
  })
  @ApiBody({
    required: true,
    type: ReqUpdateUserDto,
    description: "New data for update user",
    isArray: false,
    examples: { MockReqUpdateUser },
  })
  @ApiOperation({ summary: "Do request for updating user" })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ResUpdateUserDto,
    description: "Return updated user",
    isArray: false,
    example: MockResUpdateUser,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for updating user.
   *
   * @instance
   * @method updateUser
   * @param { string } userId
   * @param { ReqUpdateUserDto } data
   * @returns { Promise&lt;ResUpdateUserDto> }
   * @see { ReqUpdateUserDto }
   * @see { ResUpdateUserDto }
   * @see { UserService }
   */
  updateUser(
    @Param("id") userId: string,
    @Body() data: ReqUpdateUserDto,
  ): Promise<ResUpdateUserDto> {
    return this.userService.updateUser(userId, data);
  }

  @Get("get-profile/:id")
  @ApiParam({
    name: "id",
    required: true,
    type: String,
    description: "Identifier user",
    example: faker.string.uuid(),
  })
  @ApiOperation({ summary: "Do request for getting profile user" })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ResProfileDto,
    description: "Return user profile",
    isArray: false,
    example: MockResProfile,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while getting the user profile",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for getting user profile.
   *
   * @instance
   * @method getProfile
   * @param userId
   * @returns { Promise&lt;ResProfileDto> }
   * @see { ResProfileDto }
   * @see { ProfileService }
   */
  getProfile(@Param("id") userId: string): Promise<ResProfileDto> {
    return this.profileService.getProfile(userId);
  }

  @Post("update-profile/:id")
  @ApiParam({
    name: "id",
    required: true,
    type: String,
    description: "Identifier user",
    example: faker.string.uuid(),
  })
  @ApiBody({
    required: true,
    type: ReqUpdateProfileDto,
    description: "New data for update user profile",
    isArray: false,
    // examples: {  },
  })
  @ApiOperation({ summary: "Do request for updating user" })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ResProfileDto,
    description: "Return user updated profile",
    isArray: false,
    // TODO adds example response updated profile
    // example:
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the user",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "Method is forbidden",
  })
  /**
   * Controller method for update user profile.
   *
   * @instance
   * @method updateProfile
   * @param { string } userId
   * @param { ReqUpdateProfileDto } data
   * @returns { Promise&ResUpdatedProfileDto> }
   * @see { ReqUpdateProfileDto }
   * @see { ResUpdateProfileDto }
   */
  updateProfile(
    @Param("id") userId: string,
    @Body() data: ReqUpdateProfileDto,
  ): Promise<ResUpdateProfileDto> {
    return this.profileService.updateProfile(userId, data);
  }
}
