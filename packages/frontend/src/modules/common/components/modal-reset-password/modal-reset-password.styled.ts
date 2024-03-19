import { Button } from '@mui/material';
import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const StyledSubmitBtn = styled(Button)`
  && {
    text-transform: capitalize;
    font-size: ${SIZES.m};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
