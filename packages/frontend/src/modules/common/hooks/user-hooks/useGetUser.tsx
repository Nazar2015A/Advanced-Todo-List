import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { useLocation } from 'react-router-dom';
import { APP_KEYS } from '../../consts';
import userService from '../../../../service/user-service/UserService';
import { useAuth } from '../auth-hooks/useAuth';
import { IUserResponse } from '../../types/user.types';

export const useGetUser = () => {
  const { setUser, setIsLogin } = useAuth();
  const location = useLocation();
  const onSuccess = (data: AxiosResponse<IUserResponse>) => {
    setUser!(data.data);
    setIsLogin!();
  };

  return useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.GET_USER, location.pathname],
    queryFn: () => userService.getUser(),
    retry: false,
    cacheTime: 0,
    staleTime: 0,
    onSuccess
  });
};
