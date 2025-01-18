import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsStrongPassword } from "class-validator";

export class ReqResetPasswordDto {
	@ApiProperty({
		type: String,
		description: "Property of email",
		required: true,
	})
	@IsString({ message: "Email value must be type string" })
	email: string;

	@ApiProperty({
		type: String,
		description: "Property of new password",
		required: true,
	})
	@IsStrongPassword()
	@IsString({ message: "Email value must be type string" })
	newPassword: string;
}
