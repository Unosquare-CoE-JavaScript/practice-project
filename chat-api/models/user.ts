import {UserAttributes} from "../src/services/repositories/domain/User";
import {Table, Model, Column, UpdatedAt, CreatedAt, HasMany, ForeignKey} from 'sequelize-typescript';
import {Conversation} from "./conversation";
import {Message} from "./message";
import {UserStatus} from "./userStatus";
import {UserUser} from "./userUser";

@Table
export class User extends Model<UserAttributes> {

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
