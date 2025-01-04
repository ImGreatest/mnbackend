import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SignInDto {
	@ApiProperty({
		type: String,
	})
	@IsOptional()
	@IsString()
	email?: string;

	@ApiProperty({
		type: String,
	})
	@IsOptional()
	@IsString()
	phone?: string;

	@ApiProperty({
		type: String,
	})
	@IsOptional()
	@IsString()
	login?: string;

	@ApiProperty({
		type: String,
	})
	@IsString()
	password: string;

	// @ApiProperty({
	// 	type: String,
	// })
	// @IsString()
	// deviceId: string;
}
