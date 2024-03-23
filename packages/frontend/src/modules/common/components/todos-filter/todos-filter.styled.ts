import styled from "styled-components";
import { COLORS, DEVICE, SPACES } from "../../../theme";
import { SIZES, WEIGHTS } from "../../../theme/fonts.const";

export const StyledFilterBtns = styled('button')<{$active: boolean}>`
  cursor: pointer;
  text-transform: capitalize;
  color: ${COLORS.secondary};
  font-size: ${SIZES.m};
  transition: all 0.3s;
  font-weight: ${WEIGHTS.semiBold};

  &:hover {
    color: ${COLORS.white};
  }

  ${(props) =>
    props.$active &&
    `
      position: relative;
      color: ${COLORS.white};
      &::before {
        position: absolute;
        content: '';
        top: 110%;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${COLORS.green};
      }
    `}
`;