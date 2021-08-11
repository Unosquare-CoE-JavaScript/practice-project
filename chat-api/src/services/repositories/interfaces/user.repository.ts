import { User } from "../../../../models/user";

export interface UserRepository{
    findByID(userID:number):Promise<User | null>
}