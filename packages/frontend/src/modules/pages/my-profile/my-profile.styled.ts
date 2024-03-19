import styled from 'styled-components';
import { SIZES } from '../../theme/fonts.const';
import { COLORS, SPACES } from '../../theme';

export const StyledMyProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${SPACES.lg} + ${SPACES.xs});
  padding: ${SPACES.lg};
  width: 100%;
  border: 1px solid ${COLORS.gray};
  border-radius: 15px;
  background-color: ${COLORS.primary};
`;

export const StyledHeaderProfile = styled.h2`
  text-align: center;
  font-size: ${SIZES.xxl};
  margin-bottom: ${SPACES.lg};
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${SPACES.md};
`;
export const StyledInfoContainer = styled.div``;
export const StyledInfoTittle = styled.h3`
  font-size: ${SIZES.xl};
`;
export const StyledInfoText = styled.p`
  font-size: ${SIZES.m};
`;
