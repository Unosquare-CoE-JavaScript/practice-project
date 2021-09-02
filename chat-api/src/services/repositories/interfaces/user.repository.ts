import { userDTO } from '../../../dtos/userDTO';
import { User } from '../../../../models/user';

export interface UserRepository {
	findByID(userID: number): Promise<User | null>;
	findByEmail(userEmail: string): Promise<User | null>;
	add(newUser: userDTO): Promise<User | null>;
}
