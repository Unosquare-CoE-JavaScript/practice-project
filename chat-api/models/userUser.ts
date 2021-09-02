import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./user";

@Table
export class UserUser extends Model {

    @ForeignKey(()=>User)
    @Column
    idUser!: number;

    @ForeignKey(()=>User)
    @Column
    idContact!: number;
}