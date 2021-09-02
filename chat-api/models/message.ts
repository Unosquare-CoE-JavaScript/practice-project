import {Table, Model, Column, CreatedAt, ForeignKey} from 'sequelize-typescript';
import {User} from "./user";
import {Conversation} from "./conversation";
import {MessageStatus} from "./messageStatus";

@Table
export class Message extends Model {

	@ForeignKey(() => User)
	@Column
	idSender!: number;

	@ForeignKey(() => Conversation)
	@Column
	idConversation!: number;

	@Column
	message!: string;

	@ForeignKey(() => MessageStatus)
	@Column
	idMessageStatus!: number;

	@CreatedAt
	creationDate!: Date;

}
