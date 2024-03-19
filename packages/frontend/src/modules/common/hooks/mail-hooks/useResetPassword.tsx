import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import mailService from '../../../../service/mail-service/MailService';
import { APP_KEYS } from '../../consts';
import { TypeError } from '../../types/error.types';

const useRestorePassword = () => {
  const navigate = useNavigate();
  const { mutate: restorePassword } = useMutation(mailService.resetPassword.bind(mailService), {
    onSuccess: () => {
      navigate(APP_KEYS.ROUTER_KEYS.HOME);
      toast.success('Your password was successfuly restored!');
    },
    onError: (data: AxiosError<TypeError>) => {
      toast.error(`${data?.response?.data.message || data?.response?.data.error}`);
      navigate(APP_KEYS.ROUTER_KEYS.HOME);
    }
  });

  return {
    restorePassword
  };
};

export default useRestorePassword;
