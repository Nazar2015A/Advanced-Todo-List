import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormikHelpers } from 'formik';
import {
  CustomInput,
  StyledConrainerBtn,
  StyledFilter,
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
import { TodosFilter } from '../../common/components/todos-filter/todos-filter.component';
import { useModal } from '../../common/hooks/useModal';

export const MyTodos: FC = () => {
  const { setSearch, setStatus, getStatus, getSearch, searchParams } = useCustomSearchParams();
  const { modal, closeModal, openModal } = useModal(false);
  const [activeFilter, setActiveFilter] = useState<string>(getStatus || FilterTodo.ALL);

  const { createTodo } = useCreateTodo();

  const handleTaskCreate = (values: ITodoSchema, formikHelpers: FormikHelpers<ITodoSchema>) => {
    createTodo(values);
    formikHelpers.resetForm();
    closeModal();
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
      <MyTodosHeader modalOpen={openModal} />
      <StyledTodosWrapper>
        <StyledFilter>
          <StyledConrainerBtn>
            {Object.values(FilterTodo).map((filter) => (
              <TodosFilter
                key={filter}
                filter={filter}
                activeFilter={activeFilter}
                handleFilterClick={handleFilterClick}
              />
            ))}
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
        open={modal}
        title="Create a Task"
        onSubmit={handleTaskCreate}
        modalClose={closeModal}
        initialValues={INITIAL_VALUES}
      />
    </TodosContainer>
  );
};
