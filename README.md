# practice-project

Chat-app project implementing Typescript, React and NodeJs.

## NodeJs API (chat-api) - Description

This project will implement a repository pattern, and an ORM DB (Sequelize). The main purpose of this project is implement a chat-api, that can handle multilpe chat-rooms and file sharing in these. (Features could be added in the future).

Architecture:
![Screen Shot 2021-08-11 at 9 12 27 (2)](https://user-images.githubusercontent.com/84348769/129049076-52f56243-fa1c-4395-ac05-cb9762bbf1ac.jpg)
- Controllers layer: Here are all the API access routes.

- Services layer: Here is all the bussiness logic. Example: join/leave a chat-room, send a message/file etc.

- Data access layer: This layer is divided on 2, the Entities or Models here are declared all the Sequelize Models and Object Interfaces used in the project, and the Repositories which is in charge to do all the DB queries.

- Database layer: Sequelize has support for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server databases. In this project we will use MySQL. 

Use the package manager npm (https://nodejs.org/es/download/) to install the API.

```bash
npm install
```

### Main dependencies used

- [awilix](https://www.npmjs.com/package/awilix) - Extremely powerful Dependency Injection (DI) container for JavaScript/Node, written in TypeScript.
- - Main usage: container.ts

- [awilix-express](https://www.npmjs.com/package/awilix-express) - Awilix helpers, router and scope-instantiating middleware for Express.
- - Main usage: Controllers layer.

- [sequelize](https://www.npmjs.com/package/sequelize) - A promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
- - Main usage: Data Access layer.

- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) - The Sequelize Command Line Interface (CLI).
- - Main usage: used in migrations and seeders.

- [cls-hooked](https://www.npmjs.com/package/cls-hooked) - Used for Sequelize-Transactions (Can be removed in the future).
- - Main usage: used to handle transactions on sequelized.

- [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript) - Decorators and some other features for sequelize (v6).


## React TS (chat-app) - Description
