import { Table, Model, Column, CreatedAt } from 'sequelize-typescript';

@Table
export class Message extends Model {
	@Column
	idSender!: number;

	@Column
	idConversation!: number;

	@CreatedAt
	creatrionDate!: Date;

	@Column
	message!: string;

	@Column
	idMessageStatus!: number;
}
