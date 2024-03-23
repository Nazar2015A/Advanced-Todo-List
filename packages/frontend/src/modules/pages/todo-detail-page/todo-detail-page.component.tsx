import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useGetOneTodos from '../../common/hooks/todos-hooks/userGetOneTodo';
import { APP_KEYS } from '../../common/consts';
import { TodoDetail } from '../../common/components/todo-detail';
import {
  StyledButton,
  StyledTodoNotFound,
  StyledTodoNotFoundTitle
} from './todo-detail-page.styled';
import { useMyNavigation } from '../../common/hooks/useMyNavigation';

export const TodoDetailPage: FC = () => {
  const { id } = useParams<string>();
  const { navigate } = useMyNavigation(APP_KEYS.ROUTER_KEYS.MY_TODOS);

  const { data, isError } = useGetOneTodos(id!);

  if (isError && !data) {
    return (
      <StyledTodoNotFound>
        <StyledTodoNotFoundTitle>
          Oops... <br /> Todo Not Found{' '}
        </StyledTodoNotFoundTitle>
        <StyledButton variant="contained" onClick={navigate}>
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
