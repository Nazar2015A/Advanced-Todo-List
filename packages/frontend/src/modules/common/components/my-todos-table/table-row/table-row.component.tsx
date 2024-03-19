import React, { ChangeEvent, FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledActions, StyledTableCell, StyledTableRow } from '../my-todos-table.styled';
import { tableColumns } from '../my-todos-table.consts';
import { ITodo, TodoId } from '../../../types/TodoTypes';

import { StyledDeltailBtn, StyledDescriptionRow, StyledTitleRow } from './table-row.styled';
import { APP_KEYS } from '../../../consts';
import { CustomSwitch } from '../../ui';
import { StyledDeleteBtn } from '../../../../pages/my-todos';
import { useMyNavigation } from '../../../hooks/useMyNavigation';

interface Props {
  todo: ITodo;
  handleTaskDelete: (todoId: TodoId) => void;
  handleTodoUpdate: (data: ITodo) => void;
}

export const TableRowComponent: FC<Props> = ({ todo, handleTaskDelete, handleTodoUpdate }) => {
  const { navigate } = useMyNavigation(`${APP_KEYS.ROUTER_KEYS.TODO_DETAIL}/${todo.id}`);

  const handleCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTodoUpdate({ ...todo, isCompleted: e.target.checked });
  };

  const deleteTask = () => {
    handleTaskDelete(todo.id);
  };

  return (
    <StyledTableRow key={todo.id}>
      {tableColumns.map((column) => (
        <StyledTableCell key={column.id} align="left">
          {column.label === 'Todo Title' && (
            <StyledTitleRow onClick={navigate}>{todo.title}</StyledTitleRow>
          )}
          {column.label === 'Description' && (
            <StyledDescriptionRow onClick={navigate}>{todo.description}</StyledDescriptionRow>
          )}
          {column.label === 'Actions' && (
            <StyledActions>
              <StyledDeleteBtn onClick={deleteTask}>
                <DeleteIcon />
              </StyledDeleteBtn>
              <StyledDeltailBtn onClick={navigate}>View</StyledDeltailBtn>
              <CustomSwitch action={handleCompletedChange} checked={todo.isCompleted} label="" />
            </StyledActions>
          )}
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
};
