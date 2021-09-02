process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

//ENV FILES
import * as dotenv from 'dotenv';

dotenv.config({
	path: `${__dirname}/../config/${process.env.APP_ENV}.env`,
});

import express = require('express');
import { loadControllers } from 'awilix-express';
import loadContainer from './container';
// import { sequelize } from './common/persistence/sequelize.persistence';
import {sequelize} from "../models";

import cookieParser from 'cookie-parser';
import cors from 'cors';

// import jwt = require('express-jwt');

const app: express.Application = express();

// Enable CORS Support
app.use(
	cors({
		origin: process.env.UI_ROOT_URI, // Sets Access-Control-Allow-Origin to the UI URI
		credentials: true, // Sets Access-Control-Allow-Credentials to true
	})
);

// Enable JSON Support
app.use(express.json());

// Enable Cookie Support
app.use(cookieParser());

//Load Awilix Container
loadContainer(app);

// JWT
// if (process.env.jwt_secret_key) {
//     app.use(jwt({
//             secret: process.env.jwt_secret_key,
//             algorithms: ['HS256']
//         }
//     ).unless({path:['/','/authenticate/system-user']}));
// }

// Load Controllers
app.use(loadControllers('controllers/*.ts', { cwd: __dirname }));

//Sync Sequelize Models
// (async () => {
// 	await sequelize.sync({ force: true });
// })();

export { app };
