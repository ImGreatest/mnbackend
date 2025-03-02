import { OmitType } from "@nestjs/swagger";
import { ResUserDto } from "./res-user.dto";

/**
 * Class describing the order of properties for obtaining updated data user
 *
 * @export
 * @class ResUpdateUserDto
 * @name ResUpdateUserDto
 * @extends { OmitType(ResUserDto, ["id"] as const) }
 * @see { ResUserDto }
 */
export class ResUpdateUserDto extends OmitType(ResUserDto, ["id"] as const) {}
