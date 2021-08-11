import { UserGender } from "../../../common/enums/user.gender";

export interface UserAttributes{
    id:number;
    firstName: string;
    middleName: string | null;
    firstLastName: string;
    secondLastName: string;
    phoneNumber: string,
    birthDate: Date;
    gender: UserGender;
    createdAt: Date;
    updatedAt: Date;
}