import React, { ChangeEvent, FC, useState } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FormikHelpers } from 'formik';
import {
  CartItem,
  StyledBtnsContainer,
  StyledCartHeader,
  StyledDescription,
  StyledEditBtn,
  StyledTitle
} from './my-todos-slider-card.styled';

import { ITodo, ITodoSchema, TodoId } from '../../types/TodoTypes';
import useDeleteTodo from '../../hooks/todos-hooks/useDeleteTodo';
import { CustomSwitch } from '../ui';
import { ModalContainer } from '../modal';
import { StyledDeleteBtn } from '../../../pages/my-todos';

interface Props {
  todo: ITodo;
  handleTodoUpdate: (todo: ITodo) => void;
}

export const MyTodosCard: FC<Props> = ({ todo, handleTodoUpdate }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const { deleteTodo } = useDeleteTodo();

  const handleModalToggle = () => {
    setEditModal((prev) => !prev);
  };

  const handleTaskDelete = (todoId: TodoId) => {
    deleteTodo(todoId);
  };

  const handleCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTodoUpdate({ ...todo, isCompleted: e.target.checked });
  };
  const handlePrivateChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTodoUpdate({ ...todo, isPrivate: e.target.checked });
  };

  const handleUpdate = (values: ITodoSchema, formikHelpers: FormikHelpers<ITodoSchema>) => {
    handleTodoUpdate({ id: todo.id, ...values });
    formikHelpers.resetForm();
    handleModalToggle();
  };

  const { id, ...todoWithoutId } = todo;

  return (
    <CartItem>
      <StyledCartHeader>
        <StyledTitle>{todo.title}</StyledTitle>
        <StyledDescription>{todo.description}</StyledDescription>
      </StyledCartHeader>

      <Box>
        <CustomSwitch action={handleCompletedChange} checked={todo.isCompleted} label="Completed" />
      </Box>
      <Box>
        <CustomSwitch action={handlePrivateChange} checked={todo.isPrivate} label="Private" />
      </Box>

      <StyledBtnsContainer>
        <StyledDeleteBtn onClick={() => handleTaskDelete(todo.id)}>
          <DeleteIcon />
        </StyledDeleteBtn>
        <StyledEditBtn onClick={handleModalToggle}>
          <EditIcon />
        </StyledEditBtn>
      </StyledBtnsContainer>
      <ModalContainer
        open={editModal}
        modalClose={handleModalToggle}
        onSubmit={handleUpdate}
        title="Edit a Task"
        initialValues={todoWithoutId}
      />
    </CartItem>
  );
};
