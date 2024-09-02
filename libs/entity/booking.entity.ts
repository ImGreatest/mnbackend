import {
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	ForeignKey,
	Table,
	UpdatedAt,
	BelongsTo,
	Model
} from "sequelize-typescript";
import { DateTime } from "luxon";
import { User } from "./user.entity";

@Table({
	tableName: 'booking',
	modelName: 'Booking',
	timestamps: true,
	paranoid: true,
})
export class Booking extends Model<Booking> {
	@Column({
		type: DataType.UUIDV4,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		field: 'identifier',
	})
	id: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
		field: 'user_id',
	})
	userId: string;

	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW,
		field: 'book_start_time',
	})
	bookStartTime: DateTime;

	@Column({
		type: DataType.DATE,
		field: 'book_start_end'
	})
	bookEndTime: DateTime;

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
		field: 'created_at',
	})
	createdAt: DateTime;

	@UpdatedAt
	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW,
		field: 'updated_at',
	})
	updatedAt: DateTime;

	@DeletedAt
	@Column({
		type: DataType.DATE,
		allowNull: true,
		field: 'deleted_at',
	})
	deletedAt?: DateTime;

	@BelongsTo(() => User)
	user: User;
}
