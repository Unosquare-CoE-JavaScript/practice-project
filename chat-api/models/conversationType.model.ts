import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Conversation from './conversation.model';

@Table
export default class ConversationType extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idConversationType!: number;

	@Column
	type!: string;

	@Column
	description!: string;

	@HasMany(() => Conversation)
	conversations!: Conversation[];
}
