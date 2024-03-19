import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../../consts';
import { useTokenLocalStorage } from '../userTokenLocalStorage';
import { useAuth } from './useAuth';

export const useLogout = () => {
  const navigate = useNavigate();
  const { setIsNotLogin, setUser } = useAuth();

  const { removeToken } = useTokenLocalStorage();
  const logout = () => {
    removeToken();
    setIsNotLogin!();
    setUser!(null);
    navigate(APP_KEYS.ROUTER_KEYS.HOME);
  };
  return logout;
};
