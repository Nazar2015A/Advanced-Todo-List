import { Button } from '@mui/material';
import styled from 'styled-components';
import { COLORS, SPACES } from '../../../../theme';
import { SIZES, WEIGHTS } from '../../../../theme/fonts.const';

export const StyledNavbarFooter = styled.div``;

export const StyledLogoutBtn = styled(Button)`
  && {
    color: ${COLORS.white};
    width: 100%;
    padding: 10px 20px;
    text-transform: capitalize;
    font-size: ${SIZES.m};
    font-weight: ${WEIGHTS.semiBold};
    display: flex;
    gap: ${SPACES.xs};

    &:hover {
      background-color: ${COLORS.gray};
    }
  }
`;
