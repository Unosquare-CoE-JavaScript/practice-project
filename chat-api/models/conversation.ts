import {Table, Model, Column, CreatedAt, ForeignKey, HasMany} from 'sequelize-typescript';
import {ConversationStatus} from "./conversationStatus";
import {User} from "./user";
import {ConversationType} from "./conversationType";
import {Message} from "./message";

@Table
export class Conversation extends Model {

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
    messages!: Message[]
}
