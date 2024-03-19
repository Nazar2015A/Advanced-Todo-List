import React, { FC } from 'react';
import { ITodo } from '../../types/TodoTypes';
import { StyledMobileContainer } from './my-todos-mobile.styled';
import useUpdateTodo from '../../hooks/todos-hooks/useUpdateTodo';
import { MyTodosCard } from '../my-todos-slider-card';

interface Props {
  data: ITodo[];
}

export const MyTodosMobile: FC<Props> = ({ data }) => {
  const { updateTodo } = useUpdateTodo();

  const handleTodoUpdate = (todo: ITodo) => {
    updateTodo(todo);
  };

  return (
    <StyledMobileContainer>
      {data.map((todo) => (
        <MyTodosCard key={todo.id} todo={todo} handleTodoUpdate={handleTodoUpdate} />
      ))}
    </StyledMobileContainer>
  );
};
