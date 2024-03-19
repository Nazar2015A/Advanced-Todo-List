import React from 'react';
import { ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { darkTheme } from '../../common/components/modal';
import { StyledAvatar, StyledLoginContainer, StyledLoginTitle } from './login-page.styled';
import { LoginForm } from './login-form/login-form.component';

export const LoginPage = () => (
  <ThemeProvider theme={darkTheme}>
    <StyledLoginContainer>
      <StyledAvatar>
        <LockOutlinedIcon />
      </StyledAvatar>
      <StyledLoginTitle>Sign in</StyledLoginTitle>
      <LoginForm />
    </StyledLoginContainer>
  </ThemeProvider>
);
