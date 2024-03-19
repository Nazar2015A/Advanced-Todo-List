import { useState } from 'react';
import { IUserResponse } from '../../types/user.types';

export const useIsAuth = () => {
  const [value, setValue] = useState<boolean>(false);
  const [user, setUser] = useState<IUserResponse | null>(null);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const setToTrue = () => {
    setValue(true);
  };

  const setToFalse = () => {
    setValue(false);
  };

  return { value, toggle, setToTrue, setToFalse, user, setUser };
};
