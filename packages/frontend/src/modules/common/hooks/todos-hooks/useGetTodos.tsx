import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import todoService from '../../../../service/todo-service/TodoService';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { ISearchParams } from '../../types/filters.types';
import { useAuth } from '../auth-hooks/useAuth';

const useGetTodos = (query: ISearchParams) => {
  const { setIsNotLogin } = useAuth();
  const onError = (err: AxiosError) => {
    if (err?.response?.status === 401) {
      setIsNotLogin!();
      toast.error('You are not authorized!');
    }
  };
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS, query],
    queryFn: () => todoService.getAllTodos(query),
    cacheTime: 0,
    staleTime: 0,
    retry: false,
    onError
  });
};

export default useGetTodos;
