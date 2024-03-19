import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { StyledNavbar } from './navbar.styled';
import { NavbarHeader } from './navbar-header';
import { NavbarNavigation } from './navbar-navigation';
import { NavbarFooter } from './navbar-footer';
import { BREAKPOINTS } from '../../../theme';

export const Navbar = () => {
  const { width } = useWindowSize();
  const [isNavbar, setIsNavbar] = useState<boolean>(width > BREAKPOINTS.sidebar);

  const handleToggleNavbar = () => {
    setIsNavbar((prev) => !prev);
  };

  useEffect(() => {
    if (width > BREAKPOINTS.sidebar) {
      setIsNavbar(true);
    } else {
      setIsNavbar(false);
    }
  }, [width]);

  return (
    <StyledNavbar $active={isNavbar}>
      <NavbarHeader isNavbar={isNavbar} handleToggleNavbar={handleToggleNavbar} />
      <NavbarNavigation />
      <NavbarFooter />
    </StyledNavbar>
  );
};
