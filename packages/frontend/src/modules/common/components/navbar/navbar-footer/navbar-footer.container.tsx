import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogout } from '../../../hooks/auth-hooks/useLogout';
import { useAuth } from '../../../hooks/auth-hooks/useAuth';
import { StyledLogoutBtn } from './navbar-footer.styled';

export const NavbarFooter = () => {
  const logout = useLogout();

  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <StyledLogoutBtn onClick={logout}>
          <LogoutIcon /> Logout
        </StyledLogoutBtn>
      ) : (
        <>
          <Button>Sing In</Button>
          <Button>Sing Up</Button>
        </>
      )}
    </div>
  );
};
