import { Button } from '@mui/material';
import styled from 'styled-components';
import { COLORS } from '../../../../theme';
import { FAMILIES, SIZES, WEIGHTS } from '../../../../theme/fonts.const';

export const StyledTableRow = styled.div``;

export const StyledDeltailBtn = styled(Button)`
  && {
    text-transform: capitalize;
    color: ${COLORS.lightGray};
    font-size: ${SIZES.m};
    font-weight: ${WEIGHTS.semiBold};

    &:hover {
      color: ${COLORS.white};
    }
  }
`;

export const StyledTitleRow = styled('p')`
  && {
    word-break: break-word;
    font-family: '${FAMILIES.rocknRoll}', sans-serif;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const StyledDescriptionRow = styled('p')`
  && {
    cursor: pointer;
    min-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }
`;
