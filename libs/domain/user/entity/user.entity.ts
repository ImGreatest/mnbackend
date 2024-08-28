import { Column, CreatedAt, DataType, DeletedAt, Table, Unique, UpdatedAt } from "sequelize-typescript";
import { Model } from "sequelize";
import { ERole } from "../../../enums/role.enum";

@Table({
	tableName: 'users',
	modelName: 'User',
	timestamps: true,
	paranoid: true,
})
export class User extends Model<User> {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'identifier'
	})
	id: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		field: 'user_login',
	})
	@Unique
	login: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		field: 'email',
	})
	@Unique
	email: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		field: 'phone',
	})
	@Unique
	phone: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		field: 'password'
	})
	password: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'first_name'
	})
	firstName: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'middle_name'
	})
	middleName: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'second_name',
	})
	secondName: string;

	@Column({
		type: DataType.ENUM(ERole.admin, ERole.client),
		defaultValue: ERole.client,
		field: 'role'
	})
	role: string;

  @CreatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
	  field: 'created_at'
	})
  createdAt: Date;

  @UpdatedAt
  @Column({
	  type: DataType.DATE,
	  defaultValue: DataType.NOW,
	  field: 'updated_at'
	})
  updatedAt: Date;

  @DeletedAt
  @Column({
	  type: DataType.DATE,
	  allowNull: true,
	  field: 'deleted_at'
	})
  deletedAt: Date;
}
