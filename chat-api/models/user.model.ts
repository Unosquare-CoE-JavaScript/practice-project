import { Table, Model, Column, UpdatedAt, CreatedAt, HasMany, ForeignKey, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import Conversation from "./conversation.model";
import Message from "./message.model";
import UserStatus from "./userStatus.model";
import UserUser from "./userUser.model";

@Table
export default class User extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	idUser!: number;

	@Column
	mail!: string;

	@Column
	password!: string;

	@Column
	firstName!: string;

	@Column
	lastName!: string;

	@ForeignKey(()=>UserStatus)
	@Column
	idUserStatus!: number;

	@Column
	isOnline!: boolean;

	@UpdatedAt
	lastLogin!: Date;

	@CreatedAt
	creationDate!: Date;

	@Column
	birthDate?: Date;

	@HasMany(() => Conversation)
	conversations!: Conversation[]

	@HasMany(() => Message)
	messages!: Message[]

	@HasMany(() => UserUser)
	contacts!: UserUser[]

}
