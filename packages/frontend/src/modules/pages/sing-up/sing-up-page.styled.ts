import styled from 'styled-components';
import { SIZES } from '../../theme/fonts.const';
import { DEVICE, SPACES } from '../../theme';

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${DEVICE.sidebar} {
    margin: ${SPACES.lg};
  }
  @media ${DEVICE.smallTablet} {
    margin: ${SPACES.lg} ${SPACES.lg};
  }
`;

export const StyledLoginTitle = styled.h2`
  font-size: ${SIZES.xl};
  margin-bottom: ${SPACES.md};
`;
