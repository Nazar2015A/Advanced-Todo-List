import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const TodoSliderStyled = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSiperSilde = styled(SwiperSlide)`
  && {
    width: 400px;
  }
`;
