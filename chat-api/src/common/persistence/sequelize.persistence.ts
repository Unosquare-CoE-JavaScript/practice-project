import { Sequelize } from 'sequelize-typescript';
import { User } from '../../../models/user';
import { Message } from '../../../models/message';
import { Room } from '../../../models/room';

export const sequelize = new Sequelize({
	database: process.env.db_mysql_database,
	dialect: 'mysql',
	username: process.env.db_mysql_user,
	password: process.env.db_mysql_password,
	storage: ':memory:',
	models: [User, Message, Room], // or [Player, Team],
	logging: false
});
