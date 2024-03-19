// TODO: Put a real interfaces here

import { IUser } from './user.type';

export interface ITodoDto {
  id?: number | number;
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodo extends ITodoDto {
  user?: IUser;
}

export interface ITodoUpdate {
  title: string;
  description: string;
  isComplete: boolean;
  isPrivate: boolean;
}
