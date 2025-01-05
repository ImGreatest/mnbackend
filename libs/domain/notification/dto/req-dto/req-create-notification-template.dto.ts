import { INotificationTemplate } from "../../../../shared/entity";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";
// import { ENotificationType } from "../../../../shared/enum/notification-type.enum";
import { ENotificationType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class ReqCreateNotificationTemplateDto implements Omit<INotificationTemplate, keyof IExcludeBasicProperties> {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	description?: string;

	@ApiProperty()
	@IsEnum(ENotificationType)
	type: ENotificationType;
}
