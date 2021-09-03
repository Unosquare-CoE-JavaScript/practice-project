import User  from '../../../../models/user.model';
import { UserRepository } from '../interfaces/user.repository';
import { userDTO } from '../../../dtos/userDTO';
import { ApplicationException } from '../../../common/exceptions/application.exception';

export class UserSequelizeRepository implements UserRepository {
	public async findByID(userID: number): Promise<User | null> {
		return await User.findByPk(userID);
	}

	public async findByEmail(userEmail: string): Promise<User | null> {
		return await User.findOne({ where: { mail: userEmail } });
	}

	public async add(newUser: userDTO): Promise<User | null> {
		return await User.create(newUser)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				// const { errors } = err;
				// const duplicatedEmail = errors.some(
				// 	(err: { message: string }) =>
				// 		err.message === 'users.email must be unique'
				// );
				// console.log(duplicatedEmail);
				console.log(err);
				throw new ApplicationException(err);
			});
	}
}
