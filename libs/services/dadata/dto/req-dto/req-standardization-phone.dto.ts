import { IsString } from "class-validator";

export class ReqStandardizationPhoneDto {
  @IsString()
  phone: string;
}
