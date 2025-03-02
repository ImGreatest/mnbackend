import { IsString } from "class-validator";

export class ReqSuggestsAddressDto {
  @IsString()
  address: string;
}
