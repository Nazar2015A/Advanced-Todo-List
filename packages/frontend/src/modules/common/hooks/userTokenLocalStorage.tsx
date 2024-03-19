import { useState } from 'react';
import { APP_KEYS } from '../consts';

export function useTokenLocalStorage() {
  const [tok, setTok] = useState(localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN));
  const setToken = (token: string) => {
    setTok(token);
    localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, token);
  };

  const removeToken = () => {
    setTok(null);
    localStorage.removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
  };

  const getToken = () => {
    localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);
  };

  return { setToken, removeToken, getToken, token: tok };
}
