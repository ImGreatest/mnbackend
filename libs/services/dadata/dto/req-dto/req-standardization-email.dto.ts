import { IsEmail } from "class-validator";

export class ReqStandardizationEmailDto {
	@IsEmail()
	email: string;
}
