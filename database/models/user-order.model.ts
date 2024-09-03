import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Order } from "./order.model";

@Table({
	tableName: 'user-order',
	modelName: 'UserOrder',
	timestamps: true,
	paranoid: true,
})
export class UserOrder extends Model<UserOrder> {
	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'userId'
	})
	userId: string;

	@ForeignKey(() => Order)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'orderId',
	})
	orderId: string;

	@BelongsTo(() => User)
	user: User;

	@BelongsTo(() => Order)
	order: Order;
}
