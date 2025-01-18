import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../../../libs/services/prisma/prisma.service";
import { TokenService } from "./token.service";
import { CryptoService } from "../../../libs/services/crypto/crypto.service";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthDataDto } from "./dto/auth-data.dto";
import { ResUserDto } from "../../../libs/domain/user/dto/res-dto/res-user.dto";
import { logger } from "../../../logger/logger";
import { ReqSignUpDto } from "./dto/sign-up.dto";
import { ResSignUpDto } from "./dto/res-sign-up.dto";
import { ReqResetPasswordDto } from "./dto/req-reset-password.dto";
import { UserService } from "../../../libs/domain/user/user.service";
import { ProfileService } from "../../../libs/domain/profile/profile.service";

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly tokenService: TokenService,
		private readonly cryptoService: CryptoService,
		private readonly userService: UserService,
		private readonly profileService: ProfileService,
	) {}

	async signIn(data: SignInDto): Promise<AuthDataDto> {
		const user: ResUserDto = await this.prisma.user.findUnique({
			where: {
				email: data?.email,
				login: data?.login,
				phone: data?.phone,
			},
		});

		if (!user || !this.cryptoService.compareHash(data.password, user.password)) {
			throw new UnauthorizedException();
		}

		const access = this.tokenService.generateJwt({
			sub: user.id,
			role: user.role,
		});

		logger.verbose('Auth was success', access);

		const refresh = await this.tokenService.generateRefreshToken(
			user.id,
			data.deviceId,
		);

		logger.verbose('Token update', refresh);

		return {
			access,
			refresh,
		};
	}

	async signUp(data: ReqSignUpDto): Promise<ResSignUpDto> {
		if (data.password.length > 6) {
			throw new Error('Password too shortest');
		}

		const user = await this.prisma.user.findUnique({
			where: {
				email: data?.email,
				phone: data?.phone,
				login: data?.login,
			},
		});

		if (user) {
			throw new Error('User already exists');
		}

		return {
			access: this.tokenService.generateJwt({ sub: user.id, role: user.role }),
			refresh: await this.tokenService.generateRefreshToken(user.id, data.deviceId),
			user: await this.prisma.user.create({ data }),
		}
	}

	async resetPassword(data: ReqResetPasswordDto): Promise<void> {
		const user = await this.userService.getUserByEmail(data.email);

		if (user) {
			throw new Error('User with sent email value is not found');
		}

		await this.userService.updateUser(user.id, {
			login: user.login,
			email: user.email,
			phone: user.phone,
			password: this.cryptoService.getHash(data.newPassword),
			role: user.role,
		}).then(res => res)
			.catch(e => {
				logger.error(e);
				logger.info('Update user is fail check error log');
			});

		await this.profileService.updateProfile(user.id, {
			firstname: user.profile.firstname,
			middleName: user.profile.middleName,
			lastname: user.profile.lastname,
			address: user.profile.address,
			alternateContact: user.profile.alternateContact,
		}).then(res => res)
			.catch(e => {
				logger.error(e);
				logger.info('Update profile is fail check error log');
			})
	}
}
