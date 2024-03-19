import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import userService from '../../../../service/user-service/UserService';
import { TypeError } from '../../types/error.types';

export const useChangePassword = () => {
  const onError = (data: AxiosError<TypeError>) => {
    toast.error(`${data?.response?.data.message || data?.response?.data.error}`);
  };
  const onSuccess = () => {
    toast.success('Your password was successfuly changed!');
  };
  const { mutate: changePassword } = useMutation(userService.changePassword.bind(userService), {
    onSuccess,
    onError
  });

  return {
    changePassword
  };
};
