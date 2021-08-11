import {route, GET} from "awilix-express";
import {Request, Response} from "express";
import {TestService} from "../services/test.service";

@route('/check')
export class CheckController {

    constructor(private readonly testService: TestService) {
    }

    @GET()
    private index(req: Request, res: Response) {
        res.send({
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV
        });
    }

    @route('/test')
    @GET()
    private test(req: Request, res: Response) {
        res.send(
            this.testService.get()
        );
    }
}