import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Conversation} from "./conversation";

@Table
export class ConversationType extends Model {
    @Column
    idConversationType!: number;

    @Column
    type!: string;
    
    @Column
    description!: string;

    @HasMany(() => Conversation)
    conversations!: Conversation[]
}