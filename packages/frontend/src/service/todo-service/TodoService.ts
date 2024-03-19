import { BACKEND_KEYS } from '../../modules/common/consts/app-keys.const';
import {
  ITodo,
  ITodoSchema,
  TodoDetailsResponse,
  TodoId
} from '../../modules/common/types/TodoTypes';
import { ISearchParams } from '../../modules/common/types/filters.types';
import { HttpService } from '../http/http';

class TodoService extends HttpService {
  async getAllTodos(query: ISearchParams): Promise<TodoDetailsResponse> {
    const response = await this.get<TodoDetailsResponse>({
      url: BACKEND_KEYS.TODOS,
      params: { ...query }
    });
    return response.data;
  }

  async createTodo(data: ITodoSchema) {
    const response = await this.post({
      url: BACKEND_KEYS.TODOS,
      data
    });
    return response.data;
  }

  async updateTodo(updatedTodo: ITodo) {
    const { id, ...updatedTodoWithoutId } = updatedTodo;
    return this.put({
      url: `${BACKEND_KEYS.TODOS}/${updatedTodo.id}`,
      data: updatedTodoWithoutId
    });
  }

  async deleteTodo(todoId: TodoId) {
    return this.delete({
      url: `${BACKEND_KEYS.TODOS}/${todoId}`
    });
  }

  async getTodoById(todoId: TodoId) {
    const response = await this.get<ITodo>({
      url: `${BACKEND_KEYS.TODOS}/${todoId}`
    });
    return response.data;
  }
}

const todoService = new TodoService();
export default todoService;
