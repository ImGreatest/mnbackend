import { ResUserDto } from "./res-user.dto";
import { IProfile } from "../../entities";
import { ResProfileDto } from "./res-profile.dto";

export class ResCreatedUserDto extends ResUserDto {
	profile: ResProfileDto;
}
