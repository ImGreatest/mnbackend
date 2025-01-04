import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DateTime } from "luxon";
import { randomBytes } from "node:crypto";
import { PrismaService } from "../../../libs/services/prisma/prisma.service";
import { config } from "../../../config/config";
import { IPayload } from "./payloads/payload.interface";

@Injectable()
export class AuthTokenService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prisma: PrismaService,
	) {}

	generateJwtToken(payload: IPayload) {
		return this.jwtService.sign(payload, {
			secret: config.JwtSecret,
			expiresIn: config.JwtExpiresIn,
		});
	}

	async generateRefreshToken(userId: string, deviceId: string): Promise<string> {
		return this.prisma.refreshToken.create({
			data: {
				token: randomBytes(config.RefreshLength).toString('hex'),
				deviceId: deviceId,
				userId: userId,
				expiresAt: DateTime.now().plus({ month: 1 }).toJSDate(),
			},
		}).then((data) => data.token);
	}
}
