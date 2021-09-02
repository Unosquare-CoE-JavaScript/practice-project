import { userDTO } from '../../DTOs/userDTO';
import { User } from '../../models/user';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { UserRepository } from './repositories/interfaces/user.repository';
const bcrypt = require('bcrypt');

export class UserService extends BaseController {
	constructor(private readonly userRepository: UserRepository) {
		super();
	}

	public async findByID(userID: number): Promise<User> {
		const user = await this.userRepository.findByID(userID);
		if (!user) throw new ApplicationException('User not found');
		return user;
	}

	public async add(body: userDTO): Promise<User> {
		const {
			firstName,
			middleName,
			firstLastName,
			secondLastName,
			email,
			phoneNumber,
			birthDate,
			gender,
			password,
		} = body;
		let hashed_password = await bcrypt.hash(password, 12);
		const newUser = {
			firstName,
			middleName,
			firstLastName,
			secondLastName,
			email,
			phoneNumber,
			birthDate,
			gender,
			password: hashed_password,
		} as userDTO;
		const createdUser = await this.userRepository.add(newUser);
		if (!createdUser) throw new ApplicationException('Error while creating user');
		return createdUser;
	}
}
