import React, { Dispatch, FC, SetStateAction, createContext, useMemo } from 'react';
import { useIsAuth } from '../modules/common/hooks/auth-hooks/useIsAuth';
import { IUser, IUserResponse } from '../modules/common/types/user.types';

export const AuthContext = createContext<{
  isLoggedIn: boolean;
  user: IUser | null;
  setIsNotLogin?: VoidFunction;
  setIsLogin?: VoidFunction;
  setUser?: Dispatch<SetStateAction<IUserResponse | null>>;
}>({
  isLoggedIn: false,
  user: null
});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    value: isLoggedIn,
    setToFalse: setIsNotLogin,
    setToTrue: setIsLogin,
    user,
    setUser
  } = useIsAuth();

  const contextValue = useMemo(
    () => ({ isLoggedIn, user, setIsNotLogin, setIsLogin, setUser }),
    [isLoggedIn, user, setIsNotLogin, setIsLogin, setUser]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
