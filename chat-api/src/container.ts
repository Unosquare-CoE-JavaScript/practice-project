import express from 'express';
import {createContainer, asClass} from "awilix";
import {scopePerRequest} from "awilix-express";
import { TestService } from './services/test.service';
import { UserSequelizeRepository } from './services/repositories/impl/user.repository';
import { UserService } from './services/user.service';

export default (app: express.Application): void => {

    const container = createContainer({injectionMode: 'CLASSIC'});
    container.register({
        // Repositories
        userRepository: asClass(UserSequelizeRepository).scoped(),

        // Services
        userService:asClass(UserService).scoped(),
        testService: asClass(TestService).scoped(),

    });
    app.use(scopePerRequest(container));
};
