import { Injectable } from "@nestjs/common";
import { ResProfileDto } from "../dto/res-dto/res-profile.dto";
import { ReqCreateProfileDto } from "../dto/req-dto/req-create-profile.dto";
import { ReqUpdateProfileDto } from "../dto/req-dto/req-update-profile.dto";
import { ResUpdateProfileDto } from "../dto/res-dto/res-updated-profile.dto";

@Injectable()
export abstract class ProfileRepository {
  /**
   * Create profile user base on data
   *
   * @abstract
   * @instance
   * @name createProfile
   * @method createProfile
   * @param { ReqCreateProfileDto } data
   * @throws { Error } if some part of data have non-correct values. Creating user profile is failed.
   * @returns { Promise&ltResProfileDto> }
   * @see { ReqCreateProfileDto, ResProfileDto }
   */
  abstract createProfile(data: ReqCreateProfileDto): Promise<ResProfileDto>;

  /**
   * Get profile user by his identifier.
   *
   * @abstract
   * @instance
   * @name getProfile
   * @method getProfile
   * @param { string } userId
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
   * @name updateProfile
   * @method updateProfile
   * @param { string } userId
   * @param { ReqUpdateProfileDto } data
   * @returns { Promise&ltResUpdateProfileDto> }
   * @see { ReqUpdateProfileDto, ResUpdateProfileDto }
   */
  abstract updateProfile(
    userId: string,
    data: ReqUpdateProfileDto,
  ): Promise<ResUpdateProfileDto>;
}
