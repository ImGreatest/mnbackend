import { IOrder } from "@entities";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime/library";
import { EOrderStatus } from "../../../../shared/enum";


export class ReqOrderDto implements Omit<IOrder, "id" | "createdAt" | "updatedAt" | "deletedAt"> {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property user identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		description: 'Property date of delivery order',
		example: faker.date.future(),
	})
	@IsDate()
	dateDelivery: Date;

	// @ApiProperty({
	// 	type: Decimal,
	// 	description: 'Property summary cost of order',
	// 	required: true,
	// 	example: faker.number.int({
	// 		min: 0,
	// 		max: 100.00,
	// 	}),
	// })
	// @IsDecimal()
	@ApiProperty({

	})
	@IsNumber()
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
		default: EOrderStatus.ACTIVE,
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
