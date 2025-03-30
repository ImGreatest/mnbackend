import { Injectable } from "@nestjs/common";
import { Profile } from "../../../../common/models";
import { IReqCreateProfile } from "../interfaces";
import { IReqUpdateProfile } from "../interfaces/req-update-profile.interface";

@Injectable()
export abstract class ProfileRepository {
	abstract createProfile(data: IReqCreateProfile): Promise<Profile>;

	abstract getProfile(userId: string): Promise<Profile>;

	abstract updateProfile(userId: string, data: IReqUpdateProfile): Promise<Profile>;
}
