import { Column, CreatedAt, DataType, DeletedAt, Model, Table, Unique, UpdatedAt } from "sequelize-typescript";
import { DateTime } from "luxon";

@Table({
	tableName: 'products',
	modelName: 'Product',
	timestamps: true,
	paranoid: true,
})
export class Product extends Model<Product> {
	@Column({
		type: DataType.UUIDV4,
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
	@Unique
	name: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: true,
		field: 'description',
	})
	description?: string;

	@Column({
		type: DataType.NUMBER,
		allowNull: false,
		field: 'cost',
	})
	cost: number;

	@Column({
		type: DataType.STRING(1024),
		allowNull: false,
		field: 'compound',
	})
	compound: string;

  @CreatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
	  field: 'created_at'
	})
  createdAt: DateTime;

  @UpdatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
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
}
