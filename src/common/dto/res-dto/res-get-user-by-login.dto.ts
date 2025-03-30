import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "./res-profile.dto";

export class ResGetUserByLoginDto extends ResUserDto {
	profile: ResProfileDto;
}
