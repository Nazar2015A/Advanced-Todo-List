import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormikHelpers } from 'formik';
import {
  CustomInput,
  StyledConrainerBtn,
  StyledFilter,
  StyledFilterBtns,
  StyledSearch,
  StyledTodosWrapper,
  TodosContainer
} from './my-todos.styled';

import { MyTodosContent } from './my-todos-content';
import useCreateTodo from '../../common/hooks/todos-hooks/useCreateTodo';
import { ITodoSchema } from '../../common/types/TodoTypes';
import { MyTodosHeader } from '../../common/components/my-todos-header';
import { INITIAL_VALUES, ModalContainer } from '../../common/components/modal';
import { FilterTodo } from '../../common/types/todo-filter.enum';
import { useCustomSearchParams } from '../../common/hooks/useCustomSearchParams';

export const MyTodos: FC = () => {
  const { setSearch, setStatus, getStatus, getSearch, searchParams } = useCustomSearchParams();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>(getStatus || FilterTodo.ALL);

  const { createTodo } = useCreateTodo();

  const handleModalToggle = () => {
    setIsModal((prev) => !prev);
  };

  const handleTaskCreate = (values: ITodoSchema, formikHelpers: FormikHelpers<ITodoSchema>) => {
    createTodo(values);
    formikHelpers.resetForm();
    handleModalToggle();
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleChangeParams = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setStatus(activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setActiveFilter(getStatus || FilterTodo.ALL);
  }, [searchParams]);

  return (
    <TodosContainer>
      <MyTodosHeader modalOpen={handleModalToggle} />
      <StyledTodosWrapper>
        <StyledFilter>
          <StyledConrainerBtn>
            <StyledFilterBtns
              onClick={() => handleFilterClick(FilterTodo.ALL)}
              $active={activeFilter === FilterTodo.ALL}
            >
              {FilterTodo.ALL}
            </StyledFilterBtns>
            <StyledFilterBtns
              onClick={() => handleFilterClick(FilterTodo.PRIVATE)}
              $active={activeFilter === FilterTodo.PRIVATE}
            >
              {FilterTodo.PRIVATE}
            </StyledFilterBtns>
            <StyledFilterBtns
              onClick={() => handleFilterClick(FilterTodo.PUBLIC)}
              $active={activeFilter === FilterTodo.PUBLIC}
            >
              {FilterTodo.PUBLIC}
            </StyledFilterBtns>
            <StyledFilterBtns
              onClick={() => handleFilterClick(FilterTodo.COMPLETED)}
              $active={activeFilter === FilterTodo.COMPLETED}
            >
              {FilterTodo.COMPLETED}
            </StyledFilterBtns>
          </StyledConrainerBtn>

          <StyledSearch>
            <SearchIcon />
            <CustomInput
              placeholder="Search"
              value={getSearch || ''}
              onChange={handleChangeParams}
            />
          </StyledSearch>
        </StyledFilter>

        <MyTodosContent />
      </StyledTodosWrapper>
      <ModalContainer
        open={isModal}
        title="Create a Task"
        onSubmit={handleTaskCreate}
        modalClose={handleModalToggle}
        initialValues={INITIAL_VALUES}
      />
    </TodosContainer>
  );
};
