import { ITodoDto } from '../types/todos.type';

export class TodoDto {
  id?: number | number;

  title: string;

  description: string;

  isCompleted: boolean;

  isPrivate: boolean;

  constructor(model: ITodoDto) {
    this.id = model.id;
    this.title = model.title;
    this.description = model.description;
    this.isCompleted = model.isCompleted;
    this.isPrivate = model.isPrivate;
  }
}
