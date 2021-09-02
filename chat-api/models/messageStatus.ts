import { Column, Model, Table } from "sequelize-typescript";

@Table
export class MessageStatus extends Model {
    @Column
    idMessageStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;
}