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

export const HomePage = () => {
  const [modalReset, setModalReset] = useState<boolean>(false);

  const handleModalToggle = () => {
    setModalReset((prev) => !prev);
  };

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

        <StyledBtnForget onClick={handleModalToggle}>Forget Password ?</StyledBtnForget>
      </StyledHomeBtnsContainer>
      <ModalForgotPassword open={modalReset} close={handleModalToggle} />
    </StyledHomeContainer>
  );
};
