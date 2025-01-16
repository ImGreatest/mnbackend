import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "../../../profile/dto/res-dto/res-profile.dto";

/**
 * Class describing the order of properties for obtaining users by login.
 *
 * @export
 * @class { ResUserByLoginDto }
 * @extends { ResUserDto }
 * @see { ResUserDto }
 * @see { ResProfileDto }
 */
export class ResUserByLoginDto extends ResUserDto {
	profile: ResProfileDto;
}
