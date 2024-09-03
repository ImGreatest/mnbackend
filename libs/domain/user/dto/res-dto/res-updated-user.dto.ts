import { OmitType } from "@nestjs/swagger";
import { ResUserDto } from "./res-user.dto";

export class ResUpdatedUserDto extends OmitType(ResUserDto, ["identifier"] as const) {}
