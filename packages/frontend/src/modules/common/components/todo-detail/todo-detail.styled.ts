import styled from 'styled-components';
import { COLORS, DEVICE, SPACES } from '../../../theme';
import { FAMILIES, SIZES } from '../../../theme/fonts.const';

export const StyledTodoContainer = styled.div`
  padding: 5rem;
  width: 100%;
  border: 1px solid ${COLORS.gray};
  border-radius: 15px;
  background-color: ${COLORS.primary};
  display: flex;
  flex-direction: column;
  @media ${DEVICE.desktop} {
    padding: 4rem;
  }
`;
export const StyledTodoHeader = styled.div``;
export const StyledTodoContent = styled.div`
  flex-grow: 1;
`;

export const StyledTodoTitle = styled('h2')`
  && {
    font-size: ${SIZES.xxl};
    margin-bottom: 150px;
    text-align: center;
    word-break: break-word;
  }
`;

export const StyledHeaderDescription = styled('p')`
  && {
    margin-bottom: ${SPACES.lg};
    word-break: break-word;

    @media ${DEVICE.desktop} {
      margin-bottom: ${SPACES.sm};
    }
  }
`;

export const StyledTodoDescription = styled('p')`
  && {
    font-size: ${SIZES.m};
    word-break: break-word;
    text-align: left;
    font-family: '${FAMILIES.rocknRoll}', sans-serif;
  }
`;
export const StyledTodoSwitches = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.xs};
  margin-bottom: ${SPACES.md};
`;

export const StyledTodoBtns = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${SPACES.sm};
    @media ${DEVICE.desktop} {
      gap: ${SPACES.xxs};
    }
  }
`;
