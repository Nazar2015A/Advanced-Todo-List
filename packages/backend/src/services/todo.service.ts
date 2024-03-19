import { DeepPartial } from 'typeorm';
import { ITodo, ITodoUpdate } from '../types/todos.type';
import { Todo } from '../entities/Todo';
import { IUser } from '../types/user.type';
import { TodoDto } from '../dtos/todo-dto';
import { FilteredQuery } from '../types/filters.types';

export default class TodoService {
  async findAll(user: IUser, query: FilteredQuery) {
    const skip = parseInt(query.skip, 10) || 0;
    const take = parseInt(query.take, 10) || 5;
    const filteredTodosQuery = await Todo.createQueryBuilder('todo')
      .where('todo.user = :userId', { userId: user.id })
      .andWhere(
        `(
          (todo.title ilike :search OR todo.description ilike :search)
          OR (:search = '')
        )`,
        { search: `%${query.search || ''}%` || '' }
      )
      .andWhere(
        `(
          (:status = 'all')
       OR (:status = 'completed' AND todo.isCompleted = true)
      OR (:status = 'public' AND (todo.isPrivate = false)) 
      OR ((:status = 'private') AND (todo.isPrivate = true))
      OR ((:status = ''))
    )`,
        { status: query.status || '' }
      );

    const countAllTodos = await filteredTodosQuery.getCount();

    const todos = await filteredTodosQuery
      .skip(skip)
      .take(take)
      .orderBy('todo.id', 'DESC')
      .getMany();

    return { countAllTodos, todos };
  }

  async getTodoById(todoId: number) {
    const todo = await Todo.findOne({ where: { id: todoId } });
    return todo;
  }

  async createTodo(todo: ITodo, user: IUser) {
    todo.user = user;
    const newTodo = await Todo.save(todo as DeepPartial<Todo>);
    const newTodoDto = new TodoDto(newTodo);
    return newTodoDto;
  }

  async updateTodo(todoId: number, data: ITodoUpdate) {
    const updatedTodo = await Todo.createQueryBuilder()
      .update(Todo)
      .set(data)
      .where('id = :id', { id: todoId })
      .execute();

    return updatedTodo;
  }

  async deleteTodo(todoId: number) {
    const deletedTodo = await Todo.delete({ id: todoId });

    return deletedTodo;
  }
}
