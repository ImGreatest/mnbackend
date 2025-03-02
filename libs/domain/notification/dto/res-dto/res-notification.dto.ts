import { INotification } from "../../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class ResNotificationDto implements INotification {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  templateId: string;

  @ApiProperty()
  @IsDate()
  createdAt: Date;
}
