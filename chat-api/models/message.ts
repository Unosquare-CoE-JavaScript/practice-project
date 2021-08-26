import { Optional } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { MessageRecipient } from '../src/common/enums/message.recipient';
import { MessageAttributes } from '../src/services/repositories/domain/message';

interface MessageCreationAttributes extends Optional<MessageAttributes, 'messageId'> {}

@Table
export class Message extends Model<MessageAttributes, MessageCreationAttributes> {

	@Column 
	senderId!: number;

	@Column 
	recipientId!: number;

	@Column(DataType.ENUM('User', 'Room'))
	recipient!: MessageRecipient;

	@Column
	text!: string;

	@Column
	color?: string;

}