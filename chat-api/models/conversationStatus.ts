import { Column, Model, Table, HasMany } from "sequelize-typescript";
import {Conversation} from "./conversation";

@Table
export class ConversationStatus extends Model {
    @Column
    idConversationStatus!: number;

    @Column
    status!: string;

    @Column
    description!: string;

    @HasMany(() => Conversation)
    conversations!: Conversation[]
}