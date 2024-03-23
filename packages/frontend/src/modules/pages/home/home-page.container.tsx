import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnForget,
  StyledHomeBtnsContainer,
  StyledHomeContainer,
  StyledHomeHeader
} from './home-page.styled';
import { APP_KEYS } from '../../common/consts';
import { ModalForgotPassword } from '../../common/components/modal-forgot-password';
import { useModal } from '../../common/hooks/useModal';

export const HomePage = () => {
  const { modal, openModal, closeModal } = useModal(false);

  return (
    <StyledHomeContainer>
      <StyledHomeHeader>Todo App</StyledHomeHeader>
      <StyledHomeBtnsContainer>
        <Link to={APP_KEYS.ROUTER_KEYS.LOGIN}>
          <StyledBtn variant="outlined">LogIn</StyledBtn>
        </Link>
        <Link to={APP_KEYS.ROUTER_KEYS.SIGNUP}>
          <StyledBtn variant="outlined">Register</StyledBtn>
        </Link>

        <StyledBtnForget onClick={openModal}>Forget Password ?</StyledBtnForget>
      </StyledHomeBtnsContainer>
      <ModalForgotPassword open={modal} close={closeModal} />
    </StyledHomeContainer>
  );
};
