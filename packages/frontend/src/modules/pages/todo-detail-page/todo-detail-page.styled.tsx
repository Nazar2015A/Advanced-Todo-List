import styled from 'styled-components';
import { Button } from '@mui/material';
import { SIZES, WEIGHTS } from '../../theme/fonts.const';

export const StyledTodoNotFound = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledTodoNotFoundTitle = styled.h2`
  font-size: ${SIZES.xxl};
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 150px;
`;

export const StyledButton = styled(Button)`
  && {
    font-size: ${SIZES.xl};
    font-weight: ${WEIGHTS.semiBold};
    text-transform: capitalize;
  }
`;
