import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import todoService from '../../../../service/todo-service/TodoService';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useAuth } from '../auth-hooks/useAuth';

const useCreateTodo = () => {
  const client = useQueryClient();
  const { setIsNotLogin } = useAuth();
  const onError = (err: AxiosError) => {
    if (err?.response?.status === 401) {
      setIsNotLogin!();
      toast.error('You are not authorized!');
    }
  };
  const onSuccess = () => {
    client.invalidateQueries(QUERY_KEYS.TODOS);
    toast.success('Todo was succesfully create!');
  };
  const { mutate: createTodo } = useMutation(todoService.createTodo.bind(todoService), {
    onSuccess,
    onError
  });

  return {
    createTodo
  };
};

export default useCreateTodo;
