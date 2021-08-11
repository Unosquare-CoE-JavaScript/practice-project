import { User } from "../../models/user";
import { BaseController } from "../common/controllers/base.controller";
import { ApplicationException } from "../common/exceptions/application.exception";
import { UserRepository } from "./repositories/interfaces/user.repository";

export class UserService extends BaseController{
    constructor(
        private readonly userRepository:UserRepository
    ){
        super();
    }

    public async findByID(userID:number): Promise <User>{
        const user = await this.userRepository.findByID(userID);
        if(!user) throw new ApplicationException("User not found");
        return user;
    }
}