import { Form } from 'formik';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { COLORS, SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';

export const StyledForm = styled(Form)`
  && {
    display: flex;
    flex-direction: column;
    gap: ${SPACES.lg};
  }
`;

export const StyledInput = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: ${SPACES.xxs};
  }
`;

export const StyledSubmitBtnContainer = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledSubmitBtn = styled(Button)`
  && {
    padding: ${SPACES.xxs} ${SPACES.sm};
    background-color: ${COLORS.blue};
    color: ${COLORS.lightGray};
    border-radius: 15px;
    text-transform: capitalize;
    font-size: ${SIZES.m};
    gap: ${SPACES.xxs};

    &:hover {
      color: ${COLORS.white};
      background-color: ${COLORS.blue};
    }
  }
`;
