import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RefreshDataDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  token: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  deviceId: string;
}
