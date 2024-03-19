import styled from 'styled-components';
import { Button } from '@mui/material';
import { COLORS, DEVICE, SPACES } from '../../../theme';

export const StyledModalContent = styled.div`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: ${COLORS.primary};
    border-radius: 15px;
    padding: ${SPACES.md};
    color: ${COLORS.white};
    border: none;
    outline: none;

    @media ${DEVICE.tablet} {
      width: 80%;
    }
  }
`;

export const StyledModalContentHeader = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${SPACES.lg};
  }
`;

export const StyledModalContentBtn = styled(Button)`
  && {
    color: ${COLORS.secondary};

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
