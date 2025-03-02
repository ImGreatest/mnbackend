import { IProfile } from "../../../../shared/entity";
import { ResUserDto } from "./res-user.dto";
import { OmitType } from "@nestjs/swagger";

/**
 * @export
 * @class ResCreatedUserDto
 * @name ResCreatedUserDto
 * @extends { OmitType(ResUserDto, ["id" as const]) }
 * @property { IProfile } profile
 * @see { ResUserDto, IProfile }
 */
export class ResCreatedUserDto extends OmitType(ResUserDto, ["id"] as const) {
  profile: IProfile;
}
