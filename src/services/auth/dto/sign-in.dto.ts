import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SignInDto {
	@ApiProperty({
		type: String,
		example: '',
	})
	@IsOptional()
	@IsString()
	email?: string;

	@ApiProperty({
		type: String,
		example: '',
	})
	@IsOptional()
	@IsString()
	phone?: string;

	@ApiProperty({
		type: String,
		description: 'Property of login user',
		default: 'admin',
		example: 'admin',
	})
	@IsOptional()
	@IsString()
	login?: string;

	@ApiProperty({
		type: String,
		description: 'Property of password user',
		default: 'admin',
		example: 'admin',
	})
	@IsString()
	password: string;

	@ApiProperty({
		type: String,
		description: "Property of identifier device",
		example: 'deviceId',
	})
	@IsString()
	deviceId: string;
}
