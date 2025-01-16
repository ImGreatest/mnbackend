import { IOrder } from "../../../../shared/entity";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsDecimal, IsEnum, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime/library";
import { EOrderStatus } from "@prisma/client";
import { IExcludeBasicProperties } from "../../../../shared/interfaces/exclude-basic-properties.interface";

export class ReqCreateOrderDto implements Omit<IOrder, keyof IExcludeBasicProperties> {
	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		description: 'Property date of delivery order',
		example: faker.date.future(),
	})
	@IsDate()
	dateDelivery: Date;

	@ApiProperty({
		type: Decimal,
		description: 'Property summary cost of order',
		required: true,
		example: faker.number.int({
			min: 0,
			max: 100.00,
		}),
	})
	@IsDecimal()
	cost: Decimal;

	@ApiProperty({
		type: typeof EOrderStatus[faker.number.int({
			min: 0,
			max: Object.keys(EOrderStatus).length,
		})],
		required: true,
		enum: EOrderStatus,
		enumName: 'EOrderStatus',
		description: 'Property of status order',
		example: EOrderStatus[faker.number.int({
			min: 0,
			max: Object.keys(EOrderStatus).length,
		})],
		default: EOrderStatus.active,
	})
	@IsEnum(EOrderStatus)
	status: EOrderStatus

	@ApiProperty({
		type: String,
		required: false,
		description: 'Property of comment',
		example: faker.lorem.text(),
	})
	@IsOptional()
	@IsString()
	comment?: string;
}
