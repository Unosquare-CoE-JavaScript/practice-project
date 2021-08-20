import { User } from '../../../../models/user';
import { UserRepository } from '../interfaces/user.repository';
import { userDTO } from '../../../../DTOs/userDTO';

export class UserSequelizeRepository implements UserRepository {
	public async findByID(userID: number): Promise<User | null> {
		return await User.findByPk(userID);
	}

	public async add(newUser: userDTO): Promise<User | null> {
		return await User.create(newUser);
	}
}
