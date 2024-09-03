import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./product.model";
import { Size } from "./size.model";

@Table({

})
export class ProductSize extends Model<Product> {
	@ForeignKey(() => Product)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'productId',
	})
	productId: string;

	@ForeignKey(() => Size)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'sizeId',
	})
	sizeId: string;

	@BelongsTo(() => Product)
	product: string;

	@BelongsTo(() => Size)
	size: string;
}
