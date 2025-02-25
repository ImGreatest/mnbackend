import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "../../../profile/dto/res-dto/res-profile.dto";

/**
 * Class describing the order properties for obtaining users by phone
 *
 * @export
 * @class { ResUserByPhoneDto }
 * @name ResUserByPhoneDto
 * @extends { ResUserDto }
 * @property { ResProfileDto } profile
 * @see { ResUserDto, ResProfileDto }
 */
export class ResUserByPhoneDto extends ResUserDto {
  profile: ResProfileDto;
}
