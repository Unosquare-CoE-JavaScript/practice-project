import { userDTO } from '../../../../DTOs/userDTO';
import { User } from '../../../../models/user';

export interface UserRepository {
	findByID(userID: number): Promise<User | null>;
	add(newUser: userDTO): Promise<User | null>;
}
