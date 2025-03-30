import { ProfileRepository } from "../../domain/profile/repository/profile.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../services/prisma/prisma.service";
import { IReqCreateProfile } from "../../domain/profile/interfaces";
import { Profile } from "../../../common/models";
import { IReqUpdateProfile } from "../../domain/profile/interfaces/req-update-profile.interface";

@Injectable()
export class ProfileAdapter extends ProfileRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async createProfile(data: IReqCreateProfile): Promise<Profile> {
		try {
			return this.prisma.profile.create({
				data: data,
			})
				.then(res => res);
		} catch (e) {
			throw new Error(`Error creating profile - ${e}`);
		}
	}

	async getProfile(userId: string): Promise<Profile> {
		try {
			return this.prisma.profile.findUnique({
				where: { userId: userId },
			});
		} catch (e) {
			throw new Error(`Error getting profile - ${e}`);
		}
	}

	async updateProfile(userId: string, data: IReqUpdateProfile): Promise<Profile> {
		try {
			return this.prisma.profile.update({
				where: { userId: userId },
				data: data,
			});
		} catch (e) {
			throw new Error(`Error update profile - ${e}`);
		}
	}
}
