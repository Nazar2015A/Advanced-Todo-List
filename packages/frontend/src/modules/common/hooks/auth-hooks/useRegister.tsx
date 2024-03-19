import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import authService from '../../../../service/auth-service/AuthService';
import { APP_KEYS } from '../../consts';
import { TypeError } from '../../types/error.types';

export const useRegister = () => {
  const navigate = useNavigate();

  const onError = (data: AxiosError<TypeError>) => {
    toast.error(`${data?.response?.data.message || data?.response?.data.error}`);
  };

  const onSuccess = () => {
    navigate(APP_KEYS.ROUTER_KEYS.LOGIN);
    toast.success('You have been successfully registered. Please confirm your account via email.');
  };

  const { mutate: userRegister } = useMutation(authService.register.bind(authService), {
    onSuccess,
    onError
  });

  return {
    userRegister
  };
};
