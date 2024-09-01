import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { UserService } from "../../../libs/domain/user/user.service";
import { ReqCreateUserDto } from "../../../libs/domain/user/dto/req/req-create-user.dto";
import { ResUserDto } from "../../../libs/domain/user/dto/res/res-user.dto";
import { ReqUpdateUserDto } from "../../../libs/domain/user/dto/req/req-update-user.dto";
import { ResUpdatedUserDto } from "../../../libs/domain/user/dto/res/res-updated-user.dto";

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('create-user')
	@ApiBody({ type: ReqCreateUserDto })
	createUser(@Body() data: ReqCreateUserDto): Promise<void> {
		return this.userService.createUser(data);
	}

	@Get('user/:id')
	getUser(@Param('id') userId: string): Promise<ResUserDto> {
		return this.userService.getUser(userId);
	}

	@Get('users')
	getUsers(): Promise<ResUserDto[]> {
		return this.userService.getUsers();
	}

	@Post('update-user/:id')
	@ApiBody({ type: ReqUpdateUserDto })
	updateUser(
		@Param('id') userId: string,
		@Body() data: ReqUpdateUserDto,
	): Promise<ResUpdatedUserDto> {
		return this.userService.updateUser(userId, data);
	}

	@Delete('delete-user/:id')
	deleteUser(@Param('id') userId: string): Promise<void> {
		return this.userService.deleteUser(userId);
	}
}
