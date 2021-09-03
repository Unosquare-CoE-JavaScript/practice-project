import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Message from './message.model';

@Table
export default class MessageStatus extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idMessageStatus!: number;

	@Column
	status!: string;

	@Column
	description!: string;

	@HasMany(() => Message)
	messages!: Message[];
}
