import styled from 'styled-components';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { COLORS, SPACES } from '../../../theme';
import { FAMILIES, SIZES } from '../../../theme/fonts.const';

export const StyledTableContainer = styled.div`
  && {
    border-radius: 5px;
    flex-grow: 1;
  }
`;

export const StyledTableHead = styled(TableHead)`
  && {
    border-radius: 15px;
    background-color: ${COLORS.gray};
    height: 70px;
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    color: ${COLORS.white};
    font-size: ${SIZES.m};
    border: none;
    font-family: '${FAMILIES.rocknRoll}', sans-serif;

    &:first-child {
      min-width: 250px;
      width: 250px;
    }
    &:nth-child(2) {
      max-width: 150px;
      min-width: 150px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export const StyledTableRow = styled(TableRow)`
  && {
    transition: all 0.3s;
    border-radius: 15px;

    &:hover {
      background-color: ${COLORS.gray};
    }
  }
`;

export const StyledActions = styled.div`
  && {
    display: flex;
    align-items: center;
    gap: ${SPACES.xs};
  }
`;

export const StyledTitle = styled.div`
  max-width: 150px;
  word-wrap: break-word;
`;
