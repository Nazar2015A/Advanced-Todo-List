import React, { FC } from 'react';
import { Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ITodo } from '../../types/TodoTypes';
import { StyledSiperSilde, TodoSliderStyled } from './my-todos-slider.styled';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';

import useUpdateTodo from '../../hooks/todos-hooks/useUpdateTodo';
import { MyTodosCard } from '../my-todos-slider-card';

interface Props {
  data: ITodo[];
}

export const MyTodosSlider: FC<Props> = ({ data }) => {
  const { updateTodo } = useUpdateTodo();

  const handleTodoUpdate = (todo: ITodo) => {
    updateTodo(todo);
  };

  return (
    <TodoSliderStyled>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        spaceBetween={50}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false
        }}
        modules={[EffectCoverflow]}
      >
        {data.map((todo) => (
          <StyledSiperSilde key={todo.id}>
            <MyTodosCard todo={todo} handleTodoUpdate={handleTodoUpdate} />
          </StyledSiperSilde>
        ))}
      </Swiper>
    </TodoSliderStyled>
  );
};
