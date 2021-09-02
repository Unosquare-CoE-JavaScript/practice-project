import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "./user";

@Table
export class UserStatus extends Model {
    @Column
    idUserStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;

    @HasMany(() => User)
    users!: User[]
}