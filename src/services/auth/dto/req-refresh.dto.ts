import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqRefreshDto {
  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsString()
  deviceId: string;
}
