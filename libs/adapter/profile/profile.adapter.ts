import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "../../domain/profile/repository/profile.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { logger } from "../../../logger/logger";
import { ReqCreateProfileDto } from "../../domain/profile/dto/req-dto/req-create-profile.dto";
import { ResProfileDto } from "../../domain/profile/dto/res-dto/res-profile.dto";
import { ReqUpdateProfileDto } from "../../domain/profile/dto/req-dto/req-update-profile.dto";
import { ResUpdatedProfileDto } from "../../domain/profile/dto/res-dto/res-updated-profile.dto";

@Injectable()
export class ProfileAdapter extends ProfileRepository {
	constructor(private readonly prisma: PrismaService) {
		logger.info('ProfileAdapter was init');
		super();
	}

	async createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto> {
		logger.verbose(`ProfileAdapter was called createProfile method with param - ${JSON.stringify(data)}`);

		try {
			return this.prisma.profile.create({
				data: data,
			}).then(res => {
				logger.verbose("Profile was created");

				return res
			})
		} catch (e) {
			logger.error(e);
		}
	}

	async getProfile(userId: string): Promise<ResProfileDto> {
		logger.verbose(`ProfileAdapter was called getProfile method with param - ${JSON.stringify(userId)}`);

		try {
			return this.prisma.profile.findUnique({
				where: { userId: userId },
			})
		} catch (e) {
			logger.error(e);
		}
	}

	async updateProfile(userId: string, data: ReqUpdateProfileDto): Promise<ResUpdatedProfileDto> {
		logger.verbose(`ProfileAdapter was called updateProfile method with params - ${JSON.stringify(userId)}, ${JSON.stringify(data)}`)

		try {
			return this.prisma.profile.update({
				where: { userId: userId },
				data: data,
			})
		} catch (e) {
			logger.error(e);
			throw e;
		}
	}
}
