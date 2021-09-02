import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Message} from "./message";

@Table
export class MessageStatus extends Model {
    @Column
    idMessageStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;

    @HasMany(() => Message)
    messages!: Message[]
}