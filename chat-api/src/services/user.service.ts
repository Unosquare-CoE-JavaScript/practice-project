import { userDTO } from '../dtos/userDTO';
import User from '../../models/user.model';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { UserRepository } from './repositories/interfaces/user.repository';
const bcrypt = require('bcrypt');

export class UserService extends BaseController {
	constructor(private readonly userRepository: UserRepository) {
		super();
	}

	public async add(body: userDTO): Promise<User> {
		const {
			mail,
			password,
			firstName,
			lastName,
			idUserStatus,
			isOnline,
			birthDate,
		} = body;
		console.log('body', body);

		let hashed_password = await bcrypt.hash(password, 12);
		const newUser = {
			mail,
			password: hashed_password,
			firstName,
			lastName,
			idUserStatus,
			isOnline,
			birthDate: new Date(birthDate),
		} as userDTO;
		console.log('newUser', newUser);

		const createdUser = await this.userRepository.add(newUser);
		if (!createdUser)
			throw new ApplicationException('Error while creating user');
		return createdUser;
	}

	public async findByID(userID: number): Promise<User> {
		const user = await this.userRepository.findByID(userID);
		if (!user) throw new ApplicationException('User not found');
		return user;
	}
}
