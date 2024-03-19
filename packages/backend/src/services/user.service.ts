import bcrypt from 'bcryptjs';
import ApiError from '../exeptions/api.error';
import { User } from '../entities/User';
import { UserDto } from '../dtos/user-dto';
import { IUserChangePassword } from '../types/user.type';

export default class UserService {
  async getUser(data: User) {
    const userDto = new UserDto(data);
    return userDto;
  }

  async changePassword(data: IUserChangePassword, user: User) {
    const passwordMatch = await bcrypt.compare(data.oldPassword, user.password);

    if (!passwordMatch) {
      throw ApiError.BadRequest('Incorrect old password');
    }

    const hashedNewPassword = await bcrypt.hash(data.newPassword, 10);
    user.password = hashedNewPassword;

    await user.save();

    const updatedUser = new UserDto(user);

    return updatedUser;
  }
}
