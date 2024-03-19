import { useNavigate } from 'react-router-dom';

export const useMyNavigation = (url: string = '') => {
  const navigation = useNavigate();
  const navigate = () => navigation(url);

  return { navigate };
};
