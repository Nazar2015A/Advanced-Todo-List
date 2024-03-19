import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menu } from './navbar-navigation.consts';
import { StyledList, StyledListItem } from './navbar-navigation.styled';

export const NavbarNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledList>
      {menu.map((item) => (
        <StyledListItem
          key={item.id}
          $active={location.pathname === item.link}
          onClick={() => navigate(item.link)}
        >
          {React.createElement(item.icon)}
          {item.title}
        </StyledListItem>
      ))}
    </StyledList>
  );
};
