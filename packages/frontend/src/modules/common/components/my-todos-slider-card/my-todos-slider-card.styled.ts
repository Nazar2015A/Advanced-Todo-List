import styled from 'styled-components';
import { Button, Switch } from '@mui/material';
import { COLORS, DEVICE, SPACES } from '../../../theme';
import { SIZES } from '../../../theme/fonts.const';

export const CartItem = styled.div`
  && {
    height: 350px;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: ${SPACES.xxs};
    background-color: ${COLORS.darkGray};
    box-shadow: 0px 0px 53px -11px rgba(0, 0, 0, 0.75);

    @media ${DEVICE.mobile} {
      height: 400px;
    }
  }
`;

export const StyledCartHeader = styled.div`
  && {
    flex-grow: 1;
  }
`;

export const StyledTitle = styled('h2')`
  && {
    font-size: ${SIZES.xl};
    text-align: center;
    margin-bottom: ${SPACES.md};
    word-break: break-word;
  }
`;

export const StyledDescription = styled('p')`
  && {
    font-size: ${SIZES.l};
    word-break: break-word;
  }
`;

export const StyledSwitch = styled(Switch)`
  && {
  }
`;
export const StyledBtnsContainer = styled.div`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${SPACES.sm};
  }
`;

export const StyledEditBtn = styled(Button)`
  && {
    color: ${COLORS.lightGray};

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
