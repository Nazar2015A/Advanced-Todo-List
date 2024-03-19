import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetOneTodos from '../../common/hooks/todos-hooks/userGetOneTodo';
import { APP_KEYS } from '../../common/consts';
import { TodoDetail } from '../../common/components/todo-detail';
import {
  StyledButton,
  StyledTodoNotFound,
  StyledTodoNotFoundTitle
} from './todo-detail-page.styled';

export const TodoDetailPage: FC = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const { data, isError } = useGetOneTodos(id!);

  if (isError && !data) {
    return (
      <StyledTodoNotFound>
        <StyledTodoNotFoundTitle>
          Oops... <br /> Todo Not Found{' '}
        </StyledTodoNotFoundTitle>
        <StyledButton variant="contained" onClick={() => navigate(APP_KEYS.ROUTER_KEYS.MY_TODOS)}>
          Back to My Todos
        </StyledButton>
      </StyledTodoNotFound>
    );
  }
  if (data) {
    return <TodoDetail todo={data} />;
  }
  return <div>{id}</div>;
};
