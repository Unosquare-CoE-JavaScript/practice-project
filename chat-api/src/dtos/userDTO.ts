// import { UserGender } from "../src/common/enums/user.gender";

export interface userDTO {
	mail: string;
	password: string;
	firstName: string;
	lastName: string;
	idUserStatus: number;
	isOnline: boolean;
	birthDate: Date;
}