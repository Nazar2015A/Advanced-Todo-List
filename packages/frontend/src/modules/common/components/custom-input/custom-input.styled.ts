import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';
import { FormLabel, Input, TextField } from '@mui/material';

export const StyledInput = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: ${SPACES.xxs};
  }
`;

export const CustomFormLabel = styled(FormLabel)`
  && {
    text-transform: capitalize;
    margin-bottom: 15px;
  }
`;

export const CustomTextField = styled(TextField)`
`;
