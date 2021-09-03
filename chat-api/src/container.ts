import express from 'express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';

import { UserSequelizeRepository } from './services/repositories/impl/user.repository';
import { MessageSequelizeRepository } from './services/repositories/impl/message.repository';
import { CatalogSequelizeRepository } from './services/repositories/impl/catalog.repository';
import { ConversationSequelizeRepository } from './services/repositories/impl/conversation.respository';
import { ContactSequelizeRepository } from './services/repositories/impl/contact.repository';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { TestService } from './services/test.service';
import { CatalogService } from './services/catalog.service';
import { ConversationService } from './services/conversation.service';
import { ContactService } from './services/contact.service';

export default (app: express.Application): void => {
	const container = createContainer({ injectionMode: 'CLASSIC' });
	container.register({
		// Repositories
		userRepository: asClass(UserSequelizeRepository).scoped(),
		messageRepository: asClass(MessageSequelizeRepository).scoped(),
		catalogRepository: asClass(CatalogSequelizeRepository).scoped(),
		conversationRepository: asClass(ConversationSequelizeRepository).scoped(),
		contactRepository: asClass(ContactSequelizeRepository).scoped(),

		// Services
		userService: asClass(UserService).scoped(),
		messageService: asClass(MessageService).scoped(),
		authService: asClass(AuthService).scoped(),
		catalogService: asClass(CatalogService).scoped(),
		conversationService: asClass(ConversationService).scoped(),
		contactService: asClass(ContactService).scoped(),
		testService: asClass(TestService).scoped(),
	});
	app.use(scopePerRequest(container));
};
