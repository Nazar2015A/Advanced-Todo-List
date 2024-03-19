import React, { ChangeEvent, FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ITodo, ITodoSchema } from '../../types/TodoTypes';
import {
  StyledHeaderDescription,
  StyledTodoBtns,
  StyledTodoContainer,
  StyledTodoContent,
  StyledTodoDescription,
  StyledTodoHeader,
  StyledTodoSwitches,
  StyledTodoTitle
} from './todo-detail.styled';
import { CustomSwitch } from '../ui';
import useUpdateTodo from '../../hooks/todos-hooks/useUpdateTodo';

import useDeleteTodo from '../../hooks/todos-hooks/useDeleteTodo';
import { APP_KEYS } from '../../consts';

import { ModalContainer } from '../modal';
import { StyledDeleteBtn } from '../../../pages/my-todos';
import { StyledEditBtn } from '../my-todos-slider-card';
import { BtnBack } from '../ui/btn-back/btn-back.component';

interface Props {
  todo: ITodo;
}

export const TodoDetail: FC<Props> = ({ todo }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();

  const handleCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, isCompleted: e.target.checked });
  };
  const handlePrivateChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, isPrivate: e.target.checked });
  };

  const handleTaskDelete = () => {
    deleteTodo(todo.id);
    navigate(APP_KEYS.ROUTER_KEYS.MY_TODOS);
  };

  const handleToggleModal = () => {
    setEditModal((prev) => !prev);
  };

  const handleTodoUpdate = (values: ITodoSchema, formikHelpers: FormikHelpers<ITodoSchema>) => {
    updateTodo({ id: todo.id, ...values });
    formikHelpers.resetForm();
    handleToggleModal();
  };
  const { id, ...todoWithoutId } = todo;

  return (
    <StyledTodoContainer>
      <StyledTodoHeader>
        <StyledTodoTitle>{todo.title}</StyledTodoTitle>
      </StyledTodoHeader>
      <StyledTodoContent>
        <StyledHeaderDescription>Description:</StyledHeaderDescription>
        <StyledTodoDescription>{todo.description}</StyledTodoDescription>
      </StyledTodoContent>
      <StyledTodoSwitches>
        <CustomSwitch action={handleCompletedChange} checked={todo.isCompleted} label="Completed" />
        <CustomSwitch action={handlePrivateChange} checked={todo.isPrivate} label="Private" />
      </StyledTodoSwitches>
      <StyledTodoBtns>
        <BtnBack />
        <Box>
          <StyledDeleteBtn onClick={handleTaskDelete}>
            <DeleteIcon />
          </StyledDeleteBtn>
          <StyledEditBtn onClick={handleToggleModal}>
            <EditIcon />
          </StyledEditBtn>
        </Box>
      </StyledTodoBtns>
      <ModalContainer
        open={editModal}
        modalClose={handleToggleModal}
        onSubmit={handleTodoUpdate}
        title="Edit a Task"
        initialValues={todoWithoutId}
      />
    </StyledTodoContainer>
  );
};
