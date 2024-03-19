import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from './useAuth';
import authService from '../../../../service/auth-service/AuthService';
import { APP_KEYS } from '../../consts';
import { useTokenLocalStorage } from '../userTokenLocalStorage';
import { TypeError } from '../../types/error.types';

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLogin, setUser } = useAuth();
  const { setToken } = useTokenLocalStorage();

  const onSuccess = (data: AxiosResponse) => {
    const { token, ...user } = data.data;
    setIsLogin!();
    setUser!(user);
    setToken(token);
    navigate(APP_KEYS.ROUTER_KEYS.MY_TODOS);
    toast.success('You have been successfully logged in.');
  };

  const onError = (data: AxiosError<TypeError>) => {
    toast.error(`${data?.response?.data.message || data?.response?.data.error}`);
  };

  const { mutate: userLogin } = useMutation(authService.login.bind(authService), {
    onSuccess,
    onError
  });

  return {
    userLogin
  };
};
