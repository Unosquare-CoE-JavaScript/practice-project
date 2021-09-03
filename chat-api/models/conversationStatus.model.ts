import { Column, Model, Table, HasMany, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import Conversation from './conversation.model';

@Table
export default class ConversationStatus extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idConversationStatus!: number;

	@Column
	status!: string;

	@Column
	description!: string;

	@HasMany(() => Conversation)
	conversations!: Conversation[];
}
