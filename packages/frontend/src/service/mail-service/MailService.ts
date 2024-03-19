import { APP_KEYS } from '../../modules/common/consts';
import {
  IForgotPassword,
  IRestorePasswordWithToken
} from '../../modules/common/types/reset-password.types';

import { HttpService } from '../http/http';

class MailService extends HttpService {
  async forgotPassword(data: IForgotPassword) {
    const response = await this.post({
      url: `${APP_KEYS.BACKEND_KEYS.MAIL}/forgot-password`,
      data
    });
    return response.data;
  }

  async resetPassword(data: IRestorePasswordWithToken) {
    const { password, token } = data;
    const response = await this.put({
      url: `${APP_KEYS.BACKEND_KEYS.MAIL}/reset-password/${token}`,
      data: { password }
    });
    return response.data;
  }
}

const mailService = new MailService();
export default mailService;
