import { route, GET } from 'awilix-express';
import { Request, Response } from 'express';

@route('/')
export class DefaultController {
	@GET()
	private index(req: Request, res: Response) {
		res.send('Running....');
	}
}
