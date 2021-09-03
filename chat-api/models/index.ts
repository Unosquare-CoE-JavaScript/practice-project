import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	database: process.env.db_mysql_database,
	dialect: 'mysql',
	username: process.env.db_mysql_user,
	password: process.env.db_mysql_password,
	// storage: ':memory:',
	// models: [__dirname] // or [Player, Team],
	models: [__dirname + '/**/*.model.ts'],
	logging: false				// Log in console the DB creation
});
