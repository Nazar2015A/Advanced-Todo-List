import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import ApiError from '../exeptions/api.error';
import { User } from '../entities/User';
import mailService from './mail.service';
import { UserDto } from '../dtos/user-dto';
import tokenService from './token.service';

export default class AuthService {
  async registration(firstName: string, lastName: string, email: string, password: string) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest('User is already exist!');
    }
    const hashedPassword = await bcrypt.hash(password, 7);
    const activationLink = uuidv4();
    const newUser = await User.save({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      activationLink
    });

    const userDto = new UserDto(newUser);

    await mailService.sendActivateMail(
      email,
      `${process.env.API_URL}/api/mail/active/${activationLink}`
    );

    return userDto;
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest('User with this email is not registered!');
    }
    if (!user.isActivated) {
      throw ApiError.BadRequest('Your account is not activated. Please activate it to log in');
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Unccorect password!');
    }

    const userDto = new UserDto(user);
    const token = tokenService.generateToken({ ...userDto });

    return {
      token,
      ...userDto
    };
  }

  async activate(activationLink: string) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest('Unccorect link of activation!');
    }
    user.isActivated = true;
    user.save();
    return user;
  }

  async forgotPassword(email: string) {
    if (!email) {
      throw ApiError.BadRequest('User with this email not found!');
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw ApiError.BadRequest('User not found!');
    }
    const userDto = new UserDto(user);
    const token = tokenService.generateToken({ ...userDto });
    await mailService.sendRestorePassword(
      email,
      `${process.env.CLIENT_URL}/reset-password/${token}`
    );

    return userDto;
  }

  async resetPassword(token: string, password: string) {
    const userData = tokenService.validateToken(token);

    if (!userData || !token) {
      throw ApiError.BadRequest('Token is invalid!');
    }
    const user = await User.findOne({ where: { id: userData.id } });
    if (!user) {
      throw ApiError.BadRequest('User not found!');
    }
    const userDto = new UserDto(user);
    const hashedPassword = await bcrypt.hash(password, 7);
    user.password = hashedPassword;
    user.save();

    return userDto;
  }
}
