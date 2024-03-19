import { APP_KEYS } from '../../modules/common/consts';
import { IUserChangePassword } from '../../modules/common/types/user.types';
import { HttpService } from '../http/http';

class UserService extends HttpService {
  getUser() {
    return this.get({
      url: APP_KEYS.BACKEND_KEYS.USER
    });
  }

  changePassword(data: IUserChangePassword) {
    return this.put({
      url: `${APP_KEYS.BACKEND_KEYS.USER}/change-password`,
      data
    });
  }
}

const userService = new UserService();
export default userService;
