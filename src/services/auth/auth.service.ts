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

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly tokenService: TokenService,
		private readonly cryptoService: CryptoService,
		private readonly userService: UserService,
	) {}

	async signIn(data: SignInDto): Promise<AuthDataDto> {
		console.log(data);
		const user: ResUserDto = await this.prisma.user.findUnique({
			where: {
				email: data?.email,
				login: data?.login,
				phone: data?.phone,
				password: data.password,
			},
		});


		console.log(user, this.cryptoService.compareHash(data.password, user.password))

		if (!user || this.cryptoService.compareHash(data.password, user.password)) {
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
			firstname: user.firstname,
			middleName: user.middleName,
			lastname: user.lastname,
			address: user.address,
			alternateContact: user.alternateContact,
			role: user.role,
		});
	}
}
