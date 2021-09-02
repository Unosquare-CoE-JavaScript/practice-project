import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	database: process.env.db_mysql_database,
	dialect: 'mysql',
	username: process.env.db_mysql_user,
	password: process.env.db_mysql_password,
	// storage: ':memory:',
	models: ['../../../models'], // or [Player, Team],
	logging: true
});
