import { Optional } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';
import { MessageAttributes } from '../src/services/repositories/domain/message';

interface MessageCreationAttributes extends Optional<MessageAttributes, 'messageId'> {}

@Table
export class Message extends Model<MessageAttributes, MessageCreationAttributes> {

	@Column 
	roomId?: string;

	@Column 
	userId!: string;

	@Column
	toUserId?: string;

	@Column
	text!: string;

	@Column
	color!: string;

}