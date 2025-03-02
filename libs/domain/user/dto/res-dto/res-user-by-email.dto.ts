import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "../../../profile/dto/res-dto/res-profile.dto";

/**
 * Class describing the order of properties for obtaining users by email
 *
 * @export
 * @class { ResUserByEmailDto }
 * @name ResUserByEmailDto
 * @property { ResProfileDto } profile
 * @extends { ResUserDto }
 * @see { ResUserDto, ResProfileDto }
 */
export class ResUserByEmailDto extends ResUserDto {
  profile: ResProfileDto;
}
