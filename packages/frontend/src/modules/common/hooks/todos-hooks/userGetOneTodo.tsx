import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import todoService from '../../../../service/todo-service/TodoService';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useAuth } from '../auth-hooks/useAuth';

const useGetOneTodos = (id: number | string) => {
  const { setIsNotLogin } = useAuth();
  const onError = (err: AxiosError) => {
    if (err?.response?.status === 401) {
      setIsNotLogin!();
      toast.error('You are not authorized!');
    }
  };
  return useQuery({
    queryKey: [QUERY_KEYS.TODO_DETAIL],
    queryFn: () => todoService.getTodoById(id),
    retry: 0,
    cacheTime: 0,
    staleTime: 0,
    onError
  });
};

export default useGetOneTodos;
