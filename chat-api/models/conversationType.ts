import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ConversationType extends Model {
    @Column
    idConversationType!: number;

    @Column
    type!: string;
    
    @Column
    description!: string;
}