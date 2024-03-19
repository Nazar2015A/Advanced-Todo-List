import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import todoService from '../../../../service/todo-service/TodoService';
import { APP_KEYS } from '../../consts';
import { useAuth } from '../auth-hooks/useAuth';

const useUpdateTodo = () => {
  const client = useQueryClient();
  const { setIsNotLogin } = useAuth();
  const onError = (err: AxiosError) => {
    if (err?.response?.status === 401) {
      setIsNotLogin!();
      toast.error('You are not authorized!');
    }
  };
  const onSuccess = () => {
    client.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
    client.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO_DETAIL]);
  };
  const { mutate: updateTodo } = useMutation(todoService.updateTodo.bind(todoService), {
    onSuccess,
    onError
  });

  return {
    updateTodo
  };
};

export default useUpdateTodo;
