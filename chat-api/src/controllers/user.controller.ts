import { GET, POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { UserService } from '../services/user.service';
import { Request, Response } from 'express';
import { userDTO } from '../../DTOs/userDTO';
const bcrypt = require('bcrypt');

@route('/users')
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
			const {
				firstName,
				middleName,
				firstLastName,
				secondLastName,
				phoneNumber,
				birthDate,
				gender,
				password,
			} = req.body;
			let hashed_password = await bcrypt.hash(password, 12)
			const newUser = await this.userService.add({
				firstName,
				middleName,
				firstLastName,
				secondLastName,
				phoneNumber,
				birthDate,
				gender,
				password: hashed_password
			} as userDTO);
			res.send({createdUser: newUser});
		} catch (e) {
			this.handleException(e, res);
		}
	}
}
