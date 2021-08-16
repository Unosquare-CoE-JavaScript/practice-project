import { Optional } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { UserGender } from '../src/common/enums/user.gender';
import { UserAttributes } from '../src/services/repositories/domain/user';


interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {

	@Column 
	firstName!: string;

	@Column 
	middleName?: string;

	@Column
	firstLastName!: string;

	@Column
	secondLastName?: string;

	@Column
	phoneNumber!: string;

	@Column
	birthDate!: Date;

	@Column(DataType.ENUM('Male', 'Female', 'Other'))
	gender!: UserGender;

	@Column 
	password!: string;

}