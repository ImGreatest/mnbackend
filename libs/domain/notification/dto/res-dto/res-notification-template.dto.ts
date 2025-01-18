import { INotificationTemplate } from "../../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsString } from "class-validator";
import { ENotificationType } from "@prisma/client";

export class ResNotificationTemplateDto implements INotificationTemplate {
	@ApiProperty()
	@IsString()
	id: string;

	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty()
	@IsString()
	description: string;

	@ApiProperty()
	@IsEnum(ENotificationType)
	type: ENotificationType

	@ApiProperty()
	@IsDate()
	createdAt: Date;

	@ApiProperty()
	@IsDate()
	updatedAt?: Date;

	@ApiProperty()
	@IsDate()
	deletedAt?: Date;
}
