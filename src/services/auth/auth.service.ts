import { Injectable, UnauthorizedException } from "@nestjs/common";
import { DateTime } from "luxon";
import { PrismaService } from "../../../libs/services/prisma/prisma.service";
import { AuthTokenService } from "./token.service";
import { CryptoService } from "../../../libs/services/crypto/crypto.service";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthDataDto } from "./dto/auth-data.dto";
import { ResUserDto } from "../../../libs/domain/user/dto/res-dto/res-user.dto";
import { RefreshDataDto } from "./dto/refresh-data.dto";

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly tokenService: AuthTokenService,
		private readonly cryptoService: CryptoService,
	) {}

	async signIn(data: SignInDto): Promise<AuthDataDto> {
		const user: ResUserDto = await this.prisma.user.findUnique({
			where: {
				email: data?.email,
				login: data?.login,
				phone: data?.phone,
				password: data.password,
			},
		});

		if (!user || this.cryptoService.compareHash(data.password, user.password)) {
			throw new UnauthorizedException();
		}

		const access = this.tokenService.generateAccessToken(user.id);
		const refresh = await this.tokenService.generateRefresh(
			user.id,
			data.deviceId,
		)

		return {
			access,
			refresh,
		}
	}

	// TODO create signUp method
	// async signUp() {
	//
	// }

	async refresh(data: RefreshDataDto): Promise<AuthDataDto> {
		const oldToken = await this.prisma.refreshToken.findUnique({
			where: {
				token_deviceId: {
					token: data.token,
					deviceId: data.deviceId,
				},
			},
		});

		if (
			!oldToken ||
			oldToken.deviceId !== data.deviceId ||
			DateTime.now() > DateTime.fromJSDate(oldToken.expiresAt)
		) {
			throw new UnauthorizedException();
		}

		await this.prisma.refreshToken.delete({
			where: {
				token_deviceId: {
					token: data.token,
					deviceId: data.deviceId,
				},
			},
		});

		const access = this.tokenService.generateAccessToken(oldToken.userId);
		const refresh = await this.tokenService.generateRefresh(oldToken.userId, data.deviceId);

		return {
			access,
			refresh,
		};
	}
}
