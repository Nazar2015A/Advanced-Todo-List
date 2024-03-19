import styled from 'styled-components';
import { Button } from '@mui/material';
import { SIZES, WEIGHTS } from '../../theme/fonts.const';
import { COLORS, SPACES } from '../../theme';

export const StyledHomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${SPACES.lg};
`;

export const StyledHomeHeader = styled.h2`
  font-size: ${SIZES.xxl};
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 10rem;
`;

export const StyledHomeBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.lg};
`;

export const StyledBtn = styled(Button)`
  && {
    width: 100%;
    max-width: 300px;
    min-width: 200px;
    font-size: ${SIZES.m};

    text-decoration: none;
    text-transform: capitalize;
    color: ${COLORS.white};
  }
`;

export const StyledBtnForget = styled(Button)`
  && {
    color: ${COLORS.white};
    &:hover {
      background: transparent;
      text-decoration: underline;
    }
    &:active {
      background: transparent;
    }
  }
`;
