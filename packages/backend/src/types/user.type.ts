import { ITodo } from './todos.type';

export interface IUserDto {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  isActivated: boolean;
}

export interface IUser extends IUserDto {
  firstName: string;
  lastName: string;
  password: string;
  todos?: ITodo[];
}

export interface IUserChangePassword {
  oldPassword: string;
  newPassword: string;
}
