import {
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	ForeignKey,
	HasMany,
	Model,
	Table,
	UpdatedAt
} from "sequelize-typescript";
import { User } from "./user.model";
import { DateTime } from "luxon";
import { ProductOrder } from "./product-order.model";

@Table({
	tableName: 'orders',
	modelName: 'Order',
	timestamps: true,
	paranoid: true,
})
export class Order extends Model<Order> {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'identifier',
	})
	id: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
		field: 'user-id',
	})
	userId: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		field: 'sum-cost',
	})
	sumCost: number;

	@Column({
		type: DataType.STRING(255),
		allowNull: true,
		field: 'comment',
	})
	comment?: string;

  @CreatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
	  allowNull: false,
	  field: 'created_at'
	})
  createdAt: DateTime;

  @UpdatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
	  allowNull: false,
	  field: 'updated_at'
	})
  updatedAt: DateTime;

  @DeletedAt
  @Column({
	  type: DataType.DATE,
	  allowNull: true,
	  field: 'deleted_at'
	})
  deletedAt: DateTime;

	@HasMany(() => ProductOrder)
	productOrders: ProductOrder[];
}
