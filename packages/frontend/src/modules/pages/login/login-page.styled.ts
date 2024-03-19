import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { SIZES } from '../../theme/fonts.const';
import { COLORS, DEVICE, SPACES } from '../../theme';

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${DEVICE.sidebar} {
    margin: ${SPACES.lg};
  }
`;

export const StyledLoginTitle = styled.h2`
  font-size: ${SIZES.xl};
  margin-bottom: ${SPACES.md};
`;

export const StyledAvatar = styled(Avatar)`
  && {
    background-color: ${COLORS.purple};
    margin: ${SPACES.xxs};
  }
`;
