import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetUser } from '../../hooks/user-hooks/useGetUser';
import { APP_KEYS } from '../../consts';
import { useAuth } from '../../hooks/auth-hooks/useAuth';
import { Navbar } from '../navbar';

interface ProtectedRouteProps {}

export const ProtectedRoute: FC<ProtectedRouteProps> = () => {
  const { data, isLoading } = useGetUser();
  const { isLoggedIn } = useAuth();
  return data && isLoggedIn ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    !isLoading && <Navigate to={APP_KEYS.ROUTER_KEYS.HOME} />
  );
};
