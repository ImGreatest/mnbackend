import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DateTime } from "luxon";
import { randomBytes } from "node:crypto";
import { PrismaService } from "../../../libs/services/prisma/prisma.service";
import { config } from "../../../config/config";

@Injectable()
export class AuthTokenService {
	constructor(
		private readonly JwtService: JwtService,
		private readonly prisma: PrismaService,
	) {}

	generateAccessToken(userId: string): string {
		return this.JwtService.sign({
			sub: userId,
		});
	}

	async generateRefresh(userId: string, deviceId: string): Promise<string> {
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
