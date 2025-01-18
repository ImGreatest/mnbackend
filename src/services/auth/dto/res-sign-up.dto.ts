import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IUser } from "../../../../libs/shared/entity";


export class ResSignUpDto {
	@ApiProperty()
	@IsString()
	access: string;

	@ApiProperty()
	@IsString()
	refresh: string;

	@ApiProperty()
	user: IUser;
}
