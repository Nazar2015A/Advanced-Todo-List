import styled from 'styled-components';

import { Button } from '@mui/material';
import { SIZES, WEIGHTS } from '../../../../theme/fonts.const';
import { COLORS, DEVICE } from '../../../../theme';

export const StyledMenu = styled(Button)`
  && {
    position: absolute !important;
    top: 8%;
    left: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    color: ${COLORS.secondary};
    border: 1px solid ${COLORS.gray};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
    display: none !important;

    &:hover {
      background-color: ${COLORS.primary};
    }

    svg {
      width: 30px;
      height: 30px;
    }

    @media ${DEVICE.sidebar} {
      display: flex !important;
    }
  }
`;

export const StyledTypography = styled('h2')`
  && {
    font-size: ${SIZES.xxl};
    font-weight: ${WEIGHTS.semiBold};
  }
`;
