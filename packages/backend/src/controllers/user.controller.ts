import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { User } from '../entities/User';

class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: Request, res: Response) {
    const data = req.user as User;
    const user = await this.userService.getUser(data);

    res.send(user);
  }

  async changePassword(req: Request, res: Response) {
    const data = req.body;
    const user = req.user as User;
    const updatedUser = await this.userService.changePassword(data, user);

    res.send(updatedUser);
  }
}

const userController = new UserController(new UserService());
export default userController;
