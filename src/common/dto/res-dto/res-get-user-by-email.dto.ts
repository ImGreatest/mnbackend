import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "./res-profile.dto";

export class ResGetUserByEmailDto extends ResUserDto {
	profile: ResProfileDto;
}
