import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./product.model";
import { Order } from "./order.model";

@Table({
	tableName: 'product-order',
	modelName: 'ProductOrder',
	timestamps: true,
	paranoid: true,
})
export class ProductOrder extends Model<ProductOrder> {
	@ForeignKey(() => Product)
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		field: 'productId',
	})
	productId: string;

	@ForeignKey(() => Order)
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		field: 'orderId',
	})
	orderId: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		field: 'countProduct',
	})
	countProduct: number;

	@BelongsTo(() => Product)
	product: Product;

	@BelongsTo(() => Order)
	order: Order;
}
