import {
	Column,
	CreatedAt,
	DataType,
	DeletedAt, HasMany,
	Model,
	Table,
	UpdatedAt
} from "sequelize-typescript";
import { DateTime } from "luxon";
import { ProductSize } from "./product-size.model";

@Table({
	tableName: 'sizes',
	modelName: 'Size',
	timestamps: true,
	paranoid: true,
})
export class Size extends Model<Size> {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'identifier',
	})
	id: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'name',
	})
	name: string;

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

	@HasMany(() => ProductSize)
	productSizes: ProductSize[];
}
