import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUserDto } from '../types/user.type';

class TokenService {
  generateToken(payload: IUserDto) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });
    return token;
  }

  validateToken(token: string) {
    const userData: JwtPayload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    return userData;
  }
}

export default new TokenService();
