import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import { COLORS, DEVICE, SPACES } from '../../theme';
import { SIZES, WEIGHTS } from '../../theme/fonts.const';

interface ActiveProps {
  $active: boolean;
}

export const TodosContainer = styled(Box)`
  padding: ${SPACES.lg};
  width: 100%;
  border: 1px solid ${COLORS.gray};
  border-radius: 15px;
  background-color: ${COLORS.primary};
  display: flex;
  flex-direction: column;
`;

export const StyledTodosWrapper = styled.div`
  && {
    flex-grow: 1;
  }
`;

export const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${SPACES.lg};

  @media ${DEVICE.tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${SPACES.md};
  }
`;

export const StyledConrainerBtn = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACES.lg};

  @media ${DEVICE.smallTablet} {
    gap: ${SPACES.xs};
  }
  @media ${DEVICE.mobile} {
    gap: ${SPACES.xxs};
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACES.xxs};
  color: ${COLORS.secondary};
  background-color: ${COLORS.jetBlack};
  border: 1px solid ${COLORS.gray};
  padding: 5px 10px;
  border-radius: 10px;
`;


export const CustomInput = styled('input')`
  && {
    color: ${COLORS.white};
  }
`;

export const StyledDeleteBtn = styled(Button)`
  && {
    color: ${COLORS.red};

    &:hover {
      color: ${COLORS.lightRed};
    }
  }
`;
