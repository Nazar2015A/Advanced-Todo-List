import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { IUser } from '../types/user.type';
import { FilteredQuery } from '../types/filters.types';

class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const user = req.user as IUser;
    const query = req.query as unknown as FilteredQuery;
    const todos = await this.todoService.findAll(user, query);
    res.json(todos);
  }

  async getTodoById(req: Request, res: Response) {
    const todoId = parseInt(req.params.id, 10);
    const todo = await this.todoService.getTodoById(todoId);

    res.json(todo);
  }

  async createTodo(req: Request, res: Response) {
    const data = req.body;
    const user = req.user as IUser;
    const newTodo = await this.todoService.createTodo(data, user);

    res.json(newTodo);
  }

  async updateTodo(req: Request, res: Response) {
    const todoId = parseInt(req.params.id, 10);
    const data = req.body;
    const updatedTodo = await this.todoService.updateTodo(todoId, data);

    res.send(updatedTodo);
  }

  async deleteTodo(req: Request, res: Response) {
    const todoId = parseInt(req.params.id, 10);
    const deletedTodo = await this.todoService.deleteTodo(todoId);

    res.send(deletedTodo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
