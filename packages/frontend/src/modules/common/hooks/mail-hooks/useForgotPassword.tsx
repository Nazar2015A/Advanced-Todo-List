import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import mailService from '../../../../service/mail-service/MailService';
import { APP_KEYS } from '../../consts';
import { TypeError } from '../../types/error.types';

const useForgotPassword = () => {
  const navigate = useNavigate();
  const { mutate: forgotPassword } = useMutation(mailService.forgotPassword.bind(mailService), {
    onSuccess: () => {
      navigate(APP_KEYS.ROUTER_KEYS.HOME);
      toast.success('The password reset link has been sent to your email.');
    },
    onError: (data: AxiosError<TypeError>) => {
      toast.error(`${data.response?.data?.message || data.response?.data?.error}`);
    }
  });

  return {
    forgotPassword
  };
};

export default useForgotPassword;
