import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

class AuthController {
  constructor(private authService: AuthService) {}

  async registration(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;

    const userData = await this.authService.registration(firstName, lastName, email, password);

    res.json(userData);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await this.authService.login(email, password);

    res.json(userData);
  }

  async activate(req: Request, res: Response) {
    const activationLink = req.params.link;
    await this.authService.activate(activationLink);

    res.redirect(process.env.CLIENT_URL_VERIFIED_ACCOUNT);
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;
    const userData = await this.authService.forgotPassword(email);

    res.json(userData);
  }

  async resetPassword(req: Request, res: Response) {
    const { token } = req.params;
    const { password } = req.body;
    const userData = await this.authService.resetPassword(token, password);

    res.json(userData);
  }
}

const authController = new AuthController(new AuthService());
export default authController;
