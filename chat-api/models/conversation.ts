import { Table, Model, Column, CreatedAt } from 'sequelize-typescript';

@Table
export class Conversation extends Model {
	@Column
	idConversation!: number;

	@Column
	name!: string;

    @Column
    idCreator!: number;

    @CreatedAt
    creationDate!: Date;

    @Column
    idConversationStatus!: number;

    @Column
    idConversationType!: number;
}
