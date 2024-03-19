import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { APP_KEYS } from '../common/consts';
import { MyProfile } from '../pages/my-profile';
import { TodoDetailPage } from '../pages/todo-detail-page';
import { MyTodos } from '../pages/my-todos';
import { ProtectedRoute } from '../common/components/protected-route/protected-route.component';
import { LoginPage } from '../pages/login/login-page.component';
import { SignUpPage } from '../pages/sing-up';
import { ResetPasswordPage } from '../pages/reset-password';
import { HomePage } from '../pages/home';
import { PublicRoute } from '../common/components/public-route/public-route';
import { VerifiedAccountPage } from '../pages/verified-account/verified-account';

export const MainRouter = () => (
  <Router>
    <Toaster richColors position="top-center" duration={5000} />
    <Routes>
      <Route
        path={APP_KEYS.ROUTER_KEYS.ROOT}
        element={<Navigate to={APP_KEYS.ROUTER_KEYS.HOME} />}
      />
      <Route element={<PublicRoute />}>
        <Route path={APP_KEYS.ROUTER_KEYS.HOME} element={<HomePage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} element={<LoginPage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={APP_KEYS.ROUTER_KEYS.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={APP_KEYS.ROUTER_KEYS.SIGNUP} element={<SignUpPage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={APP_KEYS.ROUTER_KEYS.VERIFIED_ACCOUNT} element={<VerifiedAccountPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MyTodos />} path={APP_KEYS.ROUTER_KEYS.MY_TODOS} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<TodoDetailPage />} path={`${APP_KEYS.ROUTER_KEYS.TODO_DETAIL}/:id`} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MyProfile />} path={APP_KEYS.ROUTER_KEYS.MY_PROFILE} />
      </Route>
    </Routes>
  </Router>
);
