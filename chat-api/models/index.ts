import { Sequelize } from 'sequelize-typescript';
import {Conversation} from "./conversation";
import {ConversationStatus} from "./conversationStatus";
import {ConversationType} from "./conversationType";
import {Message} from "./message";
import {MessageStatus} from "./messageStatus";
import {User} from "./user";
import {UserStatus} from "./userStatus";
import {UserUser} from "./userUser";


export const sequelize = new Sequelize({
    database: process.env.db_mysql_database,
    dialect: 'mysql',
    username: process.env.db_mysql_user,
    password: process.env.db_mysql_password,
    // storage: ':memory:',
    // models: [__dirname] // or [Player, Team],
    models: [Conversation, ConversationStatus, ConversationType, Message, MessageStatus, User, UserStatus, UserUser] // or [Player, Team],
});
