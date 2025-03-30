import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UserService } from "../../libs/domain/user/user.service";
import {
	ReqCreateProfileDto,
	ReqCreateUserDto, ReqUpdateProfileDto, ReqUpdateUserDto,
	ResCreatedUserDto,
	ResGetUserByEmailDto,
	ResGetUserByLoginDto, ResGetUserByPhoneDto,
	ResGetUserDto, ResProfileDto, ResUpdateProfileDto, ResUpdateUserDto, ResUsersDto
} from "../../common/dto";
import { UserControllerService } from "./user-service.service";
import { ProfileService } from "../../libs/domain/profile/profile.service";

@Controller('user')
export class UserServiceController {
	constructor(
		private readonly userService: UserService,
		private readonly userControllerService: UserControllerService,
		private readonly profileService: ProfileService,
	) {}

	@MessagePattern({ cmd: 'ping' })
	ping(): Promise<string> {
		return this.userControllerService.ping();
	}

	@MessagePattern({ cmd: 'createUser' })
	createUser(data: ReqCreateUserDto): Promise<ResCreatedUserDto> {
		if (data.consumerRole !== 'client') {
			throw new Error('Forbidden');
		}

		return this.userService.createUser(data);
	}

	@MessagePattern({ cmd: 'getUser' })
	getUser(userId: string): Promise<ResGetUserDto> {
		return this.userService.getUser(userId);
	}

	@MessagePattern({ cmd: 'getUserByLogin' })
	getUserByLogin(login: string): Promise<ResGetUserByLoginDto> {
		return this.userService.getUserByEmail(login);
	}

	@MessagePattern({ cmd: 'getUserByEmail' })
	getUserByEmail(email: string): Promise<ResGetUserByEmailDto> {
		return this.userService.getUserByEmail(email);
	}

	@MessagePattern({ cmd: 'getUserByPhone' })
	getUserByPhone(phone: string): Promise<ResGetUserByPhoneDto> {
		return this.userService.getUserByPhone(phone);
	}

	@MessagePattern({ cmd: 'getUsers' })
	getUsers(): Promise<ResUsersDto> {
		return this.userService.getUsers();
	}

	@MessagePattern({ cmd: 'updateUser' })
	updateUser(userId: string, data: ReqUpdateUserDto): Promise<ResUpdateUserDto> {
		return this.userService.updateUser(userId, data);
	}

	@MessagePattern({ cmd: 'createProfile' })
	createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto> {
		return this.profileService.createProfile(data);
	}

	@MessagePattern({ cmd: 'getProfile' })
	getProfile(userId: string): Promise<ResProfileDto> {
		return this.profileService.getProfile(userId);
	}

	@MessagePattern({ cmd: 'updateProfile' })
	updateProfile(userId: string, data: ReqUpdateProfileDto): Promise<ResUpdateProfileDto> {
		return this.profileService.updateProfile(userId, data);
	}
}
