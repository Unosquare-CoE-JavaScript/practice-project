import express from 'express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';

import { UserSequelizeRepository } from './services/repositories/impl/user.repository';
import { MessageSequelizeRepository } from './services/repositories/impl/message.repository';
import { RoomSequelizeRepository } from './services/repositories/impl/room.repository';

import { UserService } from './services/user.service';
import { TestService } from './services/test.service';

export default (app: express.Application): void => {
	const container = createContainer({ injectionMode: 'CLASSIC' });
	container.register({
		// Repositories
		userRepository: asClass(UserSequelizeRepository).scoped(),
		messageRepository: asClass(MessageSequelizeRepository).scoped(),
		roomRepository: asClass(RoomSequelizeRepository).scoped(),

		// Services
		userService: asClass(UserService).scoped(),
		testService: asClass(TestService).scoped(),
	});
	app.use(scopePerRequest(container));
};
