import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { SIZES } from '../../../theme/fonts.const';

export const StyledTodosHeader = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
`;
export const StyledTodosTypography = styled('h2')`
  && {
    position: relative;
    font-weight: 900;
    font-size: ${SIZES.xxl};

    &::before {
      position: absolute;
      content: '';
      top: 110%;
      left: 0;
      width: 40px;
      height: 4px;
      background-color: ${COLORS.green};
    }
  }
`;

export const StyledTodosBtn = styled.button`
  && {
    background: transparent;
    color: ${COLORS.gray};

    svg {
      height: 50px;
      width: 50px;
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid ${COLORS.steelGray};
      padding: 5px;
      transition: all 0.3s;
      animation: colorChange 3s infinite;

      &:hover {
        background: ${COLORS.gray};
      }
    }
  }
`;
