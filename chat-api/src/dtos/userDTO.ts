// import { UserGender } from "../src/common/enums/user.gender";

export interface userDTO {
	id: number;
	firstName: string;
	middleName: string | null;
	firstLastName: string;
	secondLastName: string | null;
	email: string;
	phoneNumber: string;
	birthDate: Date;
	// gender: UserGender;
	createdAt: Date;
	updatedAt: Date;
	password: string;
	online: boolean;
}