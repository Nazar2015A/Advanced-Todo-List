import React, { FC } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { StyledTodosBtn, StyledTodosHeader, StyledTodosTypography } from './my-todos-header.styled';

interface Props {
  modalOpen: () => void;
}

export const MyTodosHeader: FC<Props> = ({ modalOpen }) => (
  <StyledTodosHeader>
    <StyledTodosTypography>Todo List</StyledTodosTypography>
    <StyledTodosBtn onClick={modalOpen}>
      <AddOutlinedIcon />
    </StyledTodosBtn>
  </StyledTodosHeader>
);
