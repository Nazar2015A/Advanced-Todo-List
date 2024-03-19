import React, { FC } from 'react';
import { Table, TableBody, TableRow } from '@mui/material';
import { ITodo, TodoId } from '../../types/TodoTypes';
import { tableColumns } from './my-todos-table.consts';
import { StyledTableCell, StyledTableContainer, StyledTableHead } from './my-todos-table.styled';
import useDeleteTodo from '../../hooks/todos-hooks/useDeleteTodo';
import useUpdateTodo from '../../hooks/todos-hooks/useUpdateTodo';
import { TableRowComponent } from './table-row';

interface Props {
  data: ITodo[];
}

export const MyTodosTable: FC<Props> = ({ data }) => {
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();

  const handleTaskDelete = (todoId: TodoId) => {
    deleteTodo(todoId);
  };

  const handleTodoUpdate = (todo: ITodo) => {
    updateTodo(todo);
  };

  return (
    <StyledTableContainer>
      <Table>
        <StyledTableHead>
          <TableRow>
            {tableColumns.map((column) => (
              <StyledTableCell key={column.id} align="left">
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>

        <TableBody>
          {data &&
            data.map((todo) => (
              <TableRowComponent
                key={todo.id}
                todo={todo}
                handleTaskDelete={handleTaskDelete}
                handleTodoUpdate={handleTodoUpdate}
              />
            ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
