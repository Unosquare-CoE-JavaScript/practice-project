import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ConversationStatus extends Model {
    @Column
    idConversationStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;
}