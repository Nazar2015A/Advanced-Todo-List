import { Form } from 'formik';
import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const StyledForm = styled(Form)`
  && {
    display: flex;
    flex-direction: column;
    gap: ${SPACES.md};
    align-items: flex-start;
  }
`;

export const StyledInputContainer = styled('div')`
  width: 30%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: ${SPACES.xxs};
`;
