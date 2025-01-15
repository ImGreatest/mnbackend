import { INotification } from "../../../../shared/entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqCreateNotificationDto implements Omit<INotification, keyof IExcludeBasicProperties> {
	@ApiProperty()
	@IsString()
	userId: string;

	@ApiProperty()
	@IsString()
	templateId: string;
}