import { Column, HasMany, Model, Table, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';
import User from './user.model';

@Table
export default class UserStatus extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idUserStatus!: number;

	@Column
	status!: string;

	@Column
	description!: string;

	@HasMany(() => User)
	users!: User[];
}
