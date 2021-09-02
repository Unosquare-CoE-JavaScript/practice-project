// import { UserGender } from "../src/common/enums/user.gender";

export interface userDTO {
	mail: string;
	firstName: string;
	lastName: string;
	isOnline: boolean;
	birthDate: Date;
	lastLogin: Date;
	creationDate: Date;
	password: string;
}