import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetUser } from '../../hooks/user-hooks/useGetUser';
import { APP_KEYS } from '../../consts';

interface PublicRouteProps {}

export const PublicRoute: FC<PublicRouteProps> = () => {
  const { data, isLoading } = useGetUser();
  return !data ? <Outlet /> : !isLoading && <Navigate to={APP_KEYS.ROUTER_KEYS.MY_TODOS} />;
};
