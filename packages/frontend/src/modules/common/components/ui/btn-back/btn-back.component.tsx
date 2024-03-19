import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBtnBack } from './btn-back.styled';

export const BtnBack = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <StyledBtnBack variant="contained" onClick={navigateBack}>
      Back
    </StyledBtnBack>
  );
};
