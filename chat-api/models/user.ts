import { Table, Model, Column, UpdatedAt, CreatedAt } from 'sequelize-typescript';

@Table
export class User extends Model {
	@Column
	idUser!: number;

	@Column
	mail: string | undefined;

	@Column
	password!: string;

	@Column
	firstName: string | undefined;

	@Column
	lastName: string | undefined;

	@Column
	idUserStatus!: number;

	@Column
	isOnline!: boolean;

	@UpdatedAt
	lastLogin!: Date;

	@CreatedAt
	creationDate!: Date;

	@Column
	birthDate: Date | undefined;
}
