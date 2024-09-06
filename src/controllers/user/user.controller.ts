import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "../../../libs/domain/user/user.service";
import { ReqCreateUserDto } from "../../../libs/domain/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../../libs/domain/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../../libs/domain/user/dto/req-dto/req-update-user.dto";
import { ResUpdatedUserDto } from "../../../libs/domain/user/dto/res-dto/res-updated-user.dto";
import { mockReqUserDto } from "../../../libs/domain/user/mocks/req-mocks/mock-req-user.dto";
import { faker } from "@faker-js/faker";
import { mockResUserDto } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user.dto";
import { ResUserByLoginDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-login.dto";
import { ResUserByEmailDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-email.dto";
import { ResUserByPhoneDto } from "../../../libs/domain/user/dto/res-dto/res-user-by-phone.dto";
import { MockResUserByLoginDto } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-login.dto";
import { MockResUserByEmailDto } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-email.dto";
import { MockResUserByPhoneDto } from "../../../libs/domain/user/mocks/res-mocks/mock-res-user-by-phone.dto";

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
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
	 */
	constructor(private readonly userService: UserService) {}

	@Post('create-user')
	@ApiBody({
		type: ReqCreateUserDto,
		required: true,
		description: 'Data for create new user',
		examples: mockReqUserDto,
	})
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'Successfully to create user',
		type: null,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	/**
	 * Controller method for create the user instance.
	 *
	 * @instance
	 * @method createUser
	 * @param { ReqCreateUserDto } data
	 * @return { Promise&lt;void> }
	 * @see { ReqCreateUserDto }
	 * @see { UserService }
	 */
	createUser(@Body() data: ReqCreateUserDto): Promise<void> {
		return this.userService.createUser(data);
	}

	@Get('user/:id')
	@ApiParam({
		name: 'id',
		type: String,
		required: true,
		description: 'Identifier user',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return user data by identifier',
		type: ResUserDto,
		isArray: false,
		example: mockResUserDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found',
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
	getUser(@Param('id') userId: string): Promise<ResUserDto> {
		return this.userService.getUser(userId);
	}

	@Get('get-user-by-login/:login')
	@ApiParam({
		name: 'login',
		type: String,
		required: true,
		description: 'The User login',
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns user by input login.',
		type: ResUserByLoginDto,
		isArray: false,
		example: MockResUserByLoginDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found',
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
	getUserByLogin(@Param('login') login: string): Promise<ResUserByLoginDto> {
		return this.userService.getUserByLogin(login);
	}

	@Get('get-user-by-email/:email')
	@ApiParam({
		name: 'email',
		type: String,
		required: true,
		description: 'The user email.',
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns user by input email.',
		type: ResUserByPhoneDto,
		isArray: false,
		example: MockResUserByEmailDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data.',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found.',
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
	getUserByEmail(@Param('email') email: string): Promise<ResUserByEmailDto> {
		return this.userService.getUserByEmail(email);
	}

	@Get('get-user-by-phone/:phone')
	@ApiParam({
		name: 'phone',
		type: String,
		required: true,
		description: 'The user phone.',
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns user by his phone.',
		type: ResUserByPhoneDto,
		isArray: false,
		example: MockResUserByPhoneDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data.',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found.',
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
	getUserByPhone(@Param('phone') phone: string): Promise<ResUserByPhoneDto> {
		return this.userService.getUserByPhone(phone);
	}

	@Get('users')
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return all users',
		type: ResUserDto,
		isArray: true,
		example: mockResUserDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Users is not found',
	})
	/**
	 * Controller method for getting the all users.
	 *
	 * @instance
	 * @method getUsers
	 * @return { Promise&lt;Array&lt;ResUser> }
	 * @see { ResUserDto }
	 * @see { UserService }
	 */
	getUsers(): Promise<ResUserDto[]> {
		return this.userService.getUsers();
	}

	@Post('update-user/:id')
	@ApiParam({
		name: 'id',
		required: true,
		type: String,
		description: 'Identifier user which will be updated',
		example: faker.string.uuid(),
	})
	@ApiBody({
		required: true,
		type: ReqUpdateUserDto,
		description: 'New data for update user',
		isArray: false,
	})
	@ApiResponse({
		status: HttpStatus.OK,
		type: ResUpdatedUserDto,
		description: 'Return updated user',
		isArray: false,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found',
	})
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		description: 'An error occurred while updating the user',
	})
	/**
	 * Controller method for updating user.
	 *
	 * @instance
	 * @method updateUser
	 * @param { string } userId
	 * @param { ReqUpdateUserDto } data
	 * @returns { Promise&lt;void> }
	 * @see { ReqUpdateUserDto }
	 * @see { UserService }
	 */
	updateUser(
		@Param('id') userId: string,
		@Body() data: ReqUpdateUserDto,
	): Promise<void> {
		return this.userService.updateUser(userId, data);
	}

	@Delete('delete-user/:id')
	@ApiParam({
		name: 'id',
		type: String,
		required: true,
		description: "Identifier user for remove",
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.NO_CONTENT,
		description: 'User remove successfully'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found',
	})
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		description: 'An error occurred while deleting the user',
	})
	/**
	 * Controller method for deleting the user by identifier.
	 *
	 * @instance
	 * @method deleteUser
	 * @param { string } userId
	 * @return { Promise&lt;void> }
	 * @see { UserService }
	 */
	deleteUser(@Param('id') userId: string): Promise<void> {
		return this.userService.deleteUser(userId);
	}
}
