import { IUserDto } from '../types/user.type';

export class UserDto {
  firstName: string;

  lastName: string;

  email: string;

  id: string;

  isActivated: boolean;

  constructor(model: IUserDto) {
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
}
