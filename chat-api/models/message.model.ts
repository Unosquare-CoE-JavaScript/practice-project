import { Table, Model, Column, CreatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import User from "./user.model";
import Conversation from "./conversation.model";
import MessageStatus from "./messageStatus.model";

@Table
export default class Message extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idMessage!: number;

	@ForeignKey(() => User)
	@Column
	idSender!: number;

	@ForeignKey(() => Conversation)
	@Column
	idConversation!: number;

	@CreatedAt
	creationDate!: Date;
	
	@Column
	message!: string;

	@ForeignKey(() => MessageStatus)
	@Column
	idMessageStatus!: number;

	

}
