import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ResSignDto {
  @ApiProperty()
  @IsString()
  access: string;

  @ApiProperty()
  @IsString()
  refresh: string;
}
