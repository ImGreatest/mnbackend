import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IPayload } from "../payloads/payload.interface";
import { IUser } from "../../../../libs/shared/entity";
import { PrismaService } from "../../../../libs/services/prisma/prisma.service";
import { config } from "../../../../config/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.JwtSecret,
		});
	}

	async validate(payload: IPayload): Promise<IUser> {
		const user = await this.prisma.user.findUnique({
			where: { id: payload.sub },
		});

		if (!user) {
			throw new NotFoundException('User is not found');
		}

		return user;
	}
}
