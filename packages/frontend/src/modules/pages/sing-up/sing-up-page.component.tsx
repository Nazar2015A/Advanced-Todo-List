import React from 'react';
import { ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { darkTheme } from '../../common/components/modal';
import { StyledLoginContainer, StyledLoginTitle } from './sing-up-page.styled';
import { SignUpForm } from './sing-up-form/sing-up-form.component';
import { StyledAvatar } from '../login';

export const SignUpPage = () => (
  <ThemeProvider theme={darkTheme}>
    <StyledLoginContainer>
      <StyledAvatar>
        <LockOutlinedIcon />
      </StyledAvatar>
      <StyledLoginTitle>Sign up</StyledLoginTitle>
      <SignUpForm />
    </StyledLoginContainer>
  </ThemeProvider>
);
