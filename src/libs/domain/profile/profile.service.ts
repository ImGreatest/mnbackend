import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "./repository/profile.repository";
import { Profile } from "../../../common/models";
import { IReqCreateProfile } from "./interfaces";
import { IReqUpdateProfile } from "./interfaces/req-update-profile.interface";

@Injectable()
export class ProfileService {
	constructor(private readonly rep: ProfileRepository) {}

	createProfile(data: IReqCreateProfile): Promise<Profile> {
		return this.rep.createProfile(data);
	}

	getProfile(userId: string): Promise<Profile> {
		return this.rep.getProfile(userId);
	}

	updateProfile(userId: string, data: IReqUpdateProfile): Promise<Profile> {
		return this.rep.updateProfile(userId, data);
	}
}
