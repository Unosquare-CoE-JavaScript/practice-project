import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './user.model';

@Table
export default class UserUser extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idUserUser!: number;

	@ForeignKey(() => User)
	@Column
	idUser!: number;

	@ForeignKey(() => User)
	@Column
	idContact!: number;
}
