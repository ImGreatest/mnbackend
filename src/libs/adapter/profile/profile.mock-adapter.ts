import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "../../domain/profile/repository/profile.repository";
import { IReqCreateProfile } from "../../domain/profile/interfaces";
import { Profile } from "../../../common/models";
import { IReqUpdateProfile } from "../../domain/profile/interfaces/req-update-profile.interface";

@Injectable()
export class ProfileMockAdapter extends ProfileRepository {
	constructor() {
		super();
	}

	async createProfile(data: IReqCreateProfile): Promise<Profile> {
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getProfile(userId: string): Promise<Profile> {
		throw new Error(`${JSON.stringify(userId)}`);
	}

	async updateProfile(userId: string, data: IReqUpdateProfile): Promise<Profile> {
		throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(data)}`);
	}
}
