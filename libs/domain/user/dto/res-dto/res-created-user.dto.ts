import { IProfile } from "../../../../shared/entity/profile.entity";
import { ResUserDto } from "./res-user.dto";
import { OmitType } from "@nestjs/swagger";

export class ResCreatedUserDto extends OmitType(ResUserDto, ['id'] as const) {
	profile: IProfile;
}
