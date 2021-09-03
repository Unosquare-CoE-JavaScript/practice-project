import {	Table, Model, Column, CreatedAt, ForeignKey, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import ConversationStatus from './conversationStatus.model';
import User from './user.model';
import ConversationType from './conversationType.model';
import Message from './message.model';

@Table
export default class Conversation extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idConversation!: number;

	@Column
	name!: string;

	@ForeignKey(() => User)
	@Column
	idCreator!: number;

	@CreatedAt
	creationDate!: Date;

	@ForeignKey(() => ConversationStatus)
	@Column
	idConversationStatus!: number;

	@ForeignKey(() => ConversationType)
	@Column
	idConversationType!: number;

	@HasMany(() => Message)
	messages!: Message[];
}
