import { Injectable } from "@nestjs/common";
import { ResProfileDto } from "../dto/res-dto/res-profile.dto";
import { ReqCreateProfileDto } from "../dto/req-dto/req-create-profile.dto";
import { ReqUpdateProfileDto } from "../dto/req-dto/req-update-profile.dto";
import { ResUpdatedProfileDto } from "../dto/res-dto/res-updated-profile.dto";

@Injectable()
export abstract class ProfileRepository {
  abstract createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto>;

  /**
   * Get profile user by his identifier.
   *
   * @abstract
   * @instance
   * @method getProfile
   * @param userId
   * @throws { Error } If the user identifier is not valid. Profile not returns.
   * @returns { Promise&ltResProfileDto> }
   * @see { ResProfileDto }
   */
  abstract getProfile(userId: string): Promise<ResProfileDto>;

  /**
   * Updates user profile instance.
   *
   * @abstract
   * @instance
   * @method updateProfile
   * @param userId
   * @param data
   * @see { ReqUpdateProfileDto }
   * @see { ResUpdatedProfileDto }
   */
  abstract updateProfile(
    userId: string,
    data: ReqUpdateProfileDto,
  ): Promise<ResUpdatedProfileDto>;
}
