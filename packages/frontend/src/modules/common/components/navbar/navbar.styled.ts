import { Box } from '@mui/material';
import styled from 'styled-components';
import { COLORS, DEVICE, SPACES } from '../../../theme';

interface StyledNavbarProps {
  $active: boolean;
}

export const StyledNavbar = styled(Box)<StyledNavbarProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border: 1px solid ${COLORS.gray};
  border-radius: 15px;
  background-color: #212022;
  width: 200px;
  max-width: 200px;
  min-width: 200px;
  margin-right: ${SPACES.lg};
  transform: ${(props) => (props.$active ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s;

  @media ${DEVICE.sidebar} {
    position: fixed;
    z-index: 100;
    height: calc(100vh - 80px);
    margin: 50px 0;
  }
`;

export default StyledNavbar;
