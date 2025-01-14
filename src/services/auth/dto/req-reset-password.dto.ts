import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsStrongPassword } from "class-validator";

export class ReqResetPasswordDto {
	@ApiProperty()
	@IsString()
	email: string;

	@ApiProperty()
	@IsStrongPassword()
	@IsString()
	newPassword: string;
}
