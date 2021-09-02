export interface UserAttributes{
    id:number;
    mail: string;
    password: string;
    firstName: string;
    lastName: string;
    idUserStatus:number;
    isOnline: boolean;
    lastLogin: Date;
    creationDate: Date;
    birthDate?: Date;
}