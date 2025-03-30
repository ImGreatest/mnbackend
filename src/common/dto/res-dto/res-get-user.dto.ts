import { ResUserDto } from "./res-user.dto";
import { ResProfileDto } from "./res-profile.dto";

export class ResGetUserDto extends ResUserDto {
	profile: ResProfileDto;
}
