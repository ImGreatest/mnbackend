import { OmitType } from "@nestjs/swagger";
import { ResUserDto } from "./res-user.dto";

/**
 * Class describing the order of properties for obtaining updated data user
 *
 * @export
 * @class ResUpdateUserDto
 * @extends OmitType(ResUserDto)
 * @see ResUserDto
 */
export class ResUpdateUserDto extends OmitType(ResUserDto, ["id"] as const) {}
