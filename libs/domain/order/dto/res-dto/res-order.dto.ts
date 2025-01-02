import { IOrder } from "@entities";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime/library";
import { EOrderStatus } from "@prisma/client";
// import { EOrderStatus } from "../../../../shared/enum";

export class ResOrderDto implements IOrder {
	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of identifier order',
		example: faker.string.uuid(),
	})
	@IsString()
	id: string;

	@ApiProperty({
		type: String,
		required: true,
		description: 'Property of user identifier',
		example: faker.string.uuid(),
	})
	@IsString()
	userId: string;

	@ApiProperty({
		type: Date,
		required: true,
		format: 'date-time',
		description: 'Property of date delivery order',
		example: faker.date.future(),
	})
	@IsDate()
	dateDelivery: Date;

	@ApiProperty({
		type: Number,
		required: true,
		description: 'Property of summary cost order',
		example: faker.number.int({
			min: 1,
			max: Number.MAX_SAFE_INTEGER,
		}),
	})
	@IsNumber()
	cost: Decimal;

	@ApiProperty({
		type: String,
		enum: EOrderStatus,
		enumName: "EOrderStatus",
		description: 'Property of status order',
		example: EOrderStatus[faker.number.int({
			min: 0,
			max: Object.keys(EOrderStatus).length,
		})],
	})
	@IsEnum(EOrderStatus)
	status: EOrderStatus;

	@ApiProperty({
		type: String,
		required: false,
		description: 'Property of comment',
		example: faker.lorem.text(),
	})
	@IsOptional()
	@IsString()
	comment?: string;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value creating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	createdAt: Date;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value last updating reservation',
		example: faker.date.past(),
	})
	@IsDate()
	updatedAt: Date;

	@ApiProperty({
		type: Date,
		format: 'date-time',
		description: 'Parameter for date-time value deleting reservation',
		example: faker.date.past(),
	})
	@IsDate()
	deletedAt?: Date;
}
