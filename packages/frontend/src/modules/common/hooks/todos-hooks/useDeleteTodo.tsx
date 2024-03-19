import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import todoService from '../../../../service/todo-service/TodoService';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useAuth } from '../auth-hooks/useAuth';

const useDeleteTodo = () => {
  const client = useQueryClient();
  const { setIsNotLogin } = useAuth();
  const onError = (err: AxiosError) => {
    if (err.response?.status === 401) {
      setIsNotLogin!();
      toast.error('You are not authorized!');
    }
  };
  const onSuccess = () => {
    client.invalidateQueries(QUERY_KEYS.TODOS);
    client.invalidateQueries(QUERY_KEYS.TODO_DETAIL);
    toast.success('Todo was successfully deleted!');
  };
  const { mutate: deleteTodo } = useMutation(todoService.deleteTodo.bind(todoService), {
    onSuccess,
    onError
  });

  return {
    deleteTodo
  };
};

export default useDeleteTodo;
