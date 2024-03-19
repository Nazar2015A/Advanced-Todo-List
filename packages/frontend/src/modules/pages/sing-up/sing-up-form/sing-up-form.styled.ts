import { Button } from '@mui/material';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, DEVICE, SPACES } from '../../../theme';
import { SIZES } from '../../../theme/fonts.const';

export const StyledForm = styled(Form)`
  && {
    display: flex;
    flex-direction: column;
    gap: ${SPACES.sm};
  }
`;
export const StyledInput = styled('div')`
  && {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${SPACES.xxs};

    @media ${DEVICE.smallTablet} {
      width: auto;
    }
  }
`;

export const StyledBtn = styled(Button)`
  && {
    margin: ${SPACES.sm} 0;
    font-size: ${SIZES.m};
  }
`;

export const StyledLink = styled(Link)`
  && {
    color: ${COLORS.white};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
      color: ${COLORS.lightGray};
    }
  }
`;
