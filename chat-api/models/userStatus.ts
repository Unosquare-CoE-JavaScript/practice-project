import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserStatus extends Model {
    @Column
    idUserStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;
}