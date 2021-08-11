import express from 'express';
import {createContainer, asClass} from "awilix";
import {scopePerRequest} from "awilix-express";
import { TestService } from './services/test.service';

export default (app: express.Application): void => {

    const container = createContainer({injectionMode: 'CLASSIC'});
    container.register({
        // Repositories
        // addOnRepository: asClass(AddOnSequelizeRepository).scoped(),


        // Services
        testService: asClass(TestService).scoped(),

    });
    app.use(scopePerRequest(container));
};
