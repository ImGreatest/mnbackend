import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthDataDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  access: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  refresh: string;
}
