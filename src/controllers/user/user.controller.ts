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

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
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
	getUser(@Param('id') userId: string): Promise<ResUserDto> {
		return this.userService.getUser(userId);
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
	deleteUser(@Param('id') userId: string): Promise<void> {
		return this.userService.deleteUser(userId);
	}
}
