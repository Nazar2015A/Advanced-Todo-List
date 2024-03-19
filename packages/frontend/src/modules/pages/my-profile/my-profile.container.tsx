import React from 'react';
import {
  StyledContent,
  StyledHeaderProfile,
  StyledInfoContainer,
  StyledInfoText,
  StyledInfoTittle,
  StyledMyProfile
} from './my-profile.styled';
import { useAuth } from '../../common/hooks/auth-hooks/useAuth';
import { ChangePasswordForm } from './change-password';

export const MyProfile = () => {
  const { user } = useAuth();

  return (
    <StyledMyProfile>
      <StyledHeaderProfile>My Profile Settings</StyledHeaderProfile>
      <StyledContent>
        <StyledInfoContainer>
          <StyledInfoTittle>First Name:</StyledInfoTittle>
          <StyledInfoText>{user?.firstName}</StyledInfoText>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledInfoTittle>Last Name:</StyledInfoTittle>
          <StyledInfoText>{user?.lastName}</StyledInfoText>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledInfoTittle>Email:</StyledInfoTittle>
          <StyledInfoText>{user?.email}</StyledInfoText>
        </StyledInfoContainer>
      </StyledContent>
      <ChangePasswordForm />
    </StyledMyProfile>
  );
};
