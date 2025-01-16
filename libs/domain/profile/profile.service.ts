import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "./repository/profile.repository";
import { ReqCreateProfileDto } from "./dto/req-dto/req-create-profile.dto";
import { ResProfileDto } from "./dto/res-dto/res-profile.dto";
import { ReqUpdateProfileDto } from "./dto/req-dto/req-update-profile.dto";
import { ResUpdatedProfileDto } from "./dto/res-dto/res-updated-profile.dto";

@Injectable()
export class ProfileService {
	constructor(private readonly profileRep: ProfileRepository) {}

	createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto> {
		return this.profileRep.createProfile(data);
	}

	getProfile(userId: string): Promise<ResProfileDto> {
		return this.profileRep.getProfile(userId);
	}

	updateProfile(userId: string, data: ReqUpdateProfileDto): Promise<ResUpdatedProfileDto> {
		return this.profileRep.updateProfile(userId, data);
	}
}
