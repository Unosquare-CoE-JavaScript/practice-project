import { GET, POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { UserService } from '../services/user.service';
import { Request, Response } from 'express';
import { userDTO } from '../dtos/userDTO';
import jwt, { Secret } from 'jsonwebtoken';

@route(`/api/v${process.env.API_VERSION}/users`)
export class SystemUserController extends BaseController {
	constructor(private readonly userService: UserService) {
		super();
	}

	@route('/find/:id')
	@GET()
	private async find(req: Request, res: Response) {
		try {
			const id = parseInt(req.params.id);
			const user = await this.userService.findByID(id);
			res.send(user);
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/add')
	@POST()
	private async add(req: Request, res: Response) {
		try {
			const newUser = await this.userService.add(req.body as userDTO);
			res.send({ createdUser: newUser });
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/me')
	@GET()
	private async me(req: Request, res: Response) {
		console.log('geting me');
		try {
			const decoded = jwt.verify(
				req.cookies[process.env.COOKIE_NAME as string],
				process.env.jwt_secret_key as Secret
			);
			console.log('decoded', decoded);
			return res.send(decoded);
		} catch (err) {
			console.log(err);
			res.send(null);
		}
	}
}
