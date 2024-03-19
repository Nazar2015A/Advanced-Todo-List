import React, { FC, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box } from '@mui/material';
import { StyledMenu, StyledTypography } from './navbar-header.styled';
import { AuthContext } from '../../../../../context/auth.context';

interface Props {
  isNavbar: boolean;
  handleToggleNavbar: () => void;
}

export const NavbarHeader: FC<Props> = ({ isNavbar, handleToggleNavbar }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <StyledMenu onClick={handleToggleNavbar}>
        {isNavbar ? <KeyboardBackspaceIcon /> : <MenuIcon />}
      </StyledMenu>
      <Box>
        <StyledTypography>{user?.firstName}</StyledTypography>
        <StyledTypography>{user?.lastName}</StyledTypography>
      </Box>
    </>
  );
};
