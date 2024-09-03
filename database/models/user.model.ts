import {
	HasMany,
	Model,
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	Table,
	Unique,
	UpdatedAt
} from "sequelize-typescript";
import { DateTime } from "luxon";
import { Booking } from "./booking.model";
import { ERole } from "../../libs/shared/enums/role.enum";
import { UserBooking } from "./user-booking.model";
import { UserOrder } from "./user-order.model";

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
	lastname: string;

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

	@HasMany(() => Booking)
	bookings: Booking[];

	@HasMany(() => UserBooking)
	userBookies: UserBooking[];

	@HasMany(() => UserOrder)
	userOrder: UserOrder[];
}
