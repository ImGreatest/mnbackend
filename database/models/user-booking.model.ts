import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Booking } from "./booking.model";

@Table({
	tableName: '',
	modelName: '',
	timestamps: true,
	paranoid: true,
})
export class UserBooking extends Model<UserBooking> {
	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'userId',
	})
	userId: string;

	@ForeignKey(() => Booking)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'bookingId',
	})
	bookingId: string;

	@BelongsTo(() => User)
	user: User;

	@BelongsTo(() => Booking)
	booking: Booking;
}
