import { User } from "../../../../models/user";
import { UserRepository } from "../interfaces/user.repository";

export class UserSequelizeRepository implements UserRepository{

    public async findByID(userID: number): Promise<User | null> {
        return await User.findByPk(userID);
    }
    
}