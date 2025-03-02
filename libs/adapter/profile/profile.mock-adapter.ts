import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "../../domain/profile/repositories/profile.repository";
import { ReqCreateProfileDto } from "../../domain/profile/dto/req-dto/req-create-profile.dto";
import { ResProfileDto } from "../../domain/profile/dto/res-dto/res-profile.dto";
import { logger } from "../../../logger/logger";
import { ReqUpdateProfileDto } from "../../domain/profile/dto/req-dto/req-update-profile.dto";
import { ResUpdateProfileDto } from "../../domain/profile/dto/res-dto/res-updated-profile.dto";

@Injectable()
export class ProfileMockAdapter extends ProfileRepository {
  constructor() {
    super();
    logger.info("ProfileMockAdapter was init");
  }

  async createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto> {
    throw new Error(`${JSON.stringify(data)}`);
  }

  async getProfile(userId: string): Promise<ResProfileDto> {
    throw new Error(`${JSON.stringify(userId)}`);
  }

  async updateProfile(
    userId: string,
    data: ReqUpdateProfileDto,
  ): Promise<ResUpdateProfileDto> {
    throw new Error(`${JSON.stringify(userId)}, ${JSON.stringify(data)}`);
  }
}
