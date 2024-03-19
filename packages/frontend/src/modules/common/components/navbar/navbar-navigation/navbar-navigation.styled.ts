import { List, ListItem } from '@mui/material';
import styled from 'styled-components';
import { COLORS, SPACES } from '../../../../theme';

export const StyledList = styled(List)`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledListItem = styled(ListItem)<{ $active: boolean }>`
  && {
    color: ${COLORS.secondary};
    display: flex;
    gap: 20px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    padding: ${SPACES.xs} ${SPACES.sm};

    &:hover {
      background-color: ${COLORS.steelGray};
    }

    ${({ $active }) =>
      $active &&
      `
        position: relative;
        background-color: ${COLORS.gray} !important;
        color: ${COLORS.white} !important;

        &::before {
            position: absolute;
            content: '';
            top: 0;
            bottom: 0;
            right: 0;
            width: 4px;
            height: 100%;
            background-color: ${COLORS.green};
        }
      `}
  }
`;
