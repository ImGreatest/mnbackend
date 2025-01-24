import { IsString } from "class-validator";

export class ReqSuggestsEmailDto {
  @IsString()
  email: string;
}
