export interface ITodoSchema {
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface ITodo extends ITodoSchema {
  id: string;
}

export interface TodoDetailsResponse {
  countAllTodos: number;
  todos: ITodo[];
}

export type TodoId = string | number;
