import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserUser extends Model {
    @Column
    idUserUSer!: number;

    @Column
    idUser!: number;

    @Column
    idContact!: number;
}