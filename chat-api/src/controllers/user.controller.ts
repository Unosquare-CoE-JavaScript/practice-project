import { GET, route } from "awilix-express";
import { BaseController } from "../common/controllers/base.controller";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";

@route("/users")
export class SystemUserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }
  @route("/find/:id")
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
}
