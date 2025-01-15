import { IsIP } from "class-validator";

export class ReqCityByIpDto {
	@IsIP()
	ip: string;
}
