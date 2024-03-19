import { APP_KEYS } from '../../modules/common/consts';
import { ILoginSchema, ISignUpSchema } from '../../modules/common/types/user.types';
import { HttpService } from '../http/http';

class AuthService extends HttpService {
  async login(data: ILoginSchema) {
    return this.post({
      url: `${APP_KEYS.BACKEND_KEYS.AUTH}/login`,
      data
    });
  }

  async register(data: ISignUpSchema) {
    return this.post({
      url: `${APP_KEYS.BACKEND_KEYS.AUTH}/register`,
      data
    });
  }
}

const authService = new AuthService();
export default authService;
