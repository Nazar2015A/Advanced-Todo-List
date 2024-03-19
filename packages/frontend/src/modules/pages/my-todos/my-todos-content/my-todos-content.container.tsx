import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Box, CircularProgress, Pagination, ThemeProvider } from '@mui/material';
import { StyledDesktopWrapper, StyledLoading } from './my-todos-content.styled';
import { BREAKPOINTS } from '../../../theme';
import { MyTodosTable } from '../../../common/components/my-todos-table';
import { MyTodosSlider } from '../../../common/components/my-todos-slider';
import { MyTodosMobile } from '../../../common/components/my-todos-mobile';
import useGetTodos from '../../../common/hooks/todos-hooks/useGetTodos';
import { useCustomSearchParams } from '../../../common/hooks/useCustomSearchParams';
import { ITEMS_PER_PAGE } from '../../../common/consts/app-keys.const';
import { darkTheme } from '../../../common/components/modal';

export const MyTodosContent = () => {
  const { getStatus, getSearch } = useCustomSearchParams();
  const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, isSuccess } = useGetTodos({
    search: getSearch,
    status: getStatus,
    skip: currentPage * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE
  });

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage - 1);
  };

  const allTodos = data?.countAllTodos ? Math.ceil(data.countAllTodos / ITEMS_PER_PAGE) : 0;

  useEffect(() => {
    setCurrentPage(0);
  }, [data?.countAllTodos]);

  if (isLoading) {
    return (
      <StyledLoading>
        <CircularProgress />
      </StyledLoading>
    );
  }
  if (width >= BREAKPOINTS.tablet && isSuccess) {
    return (
      <ThemeProvider theme={darkTheme}>
        <StyledDesktopWrapper>
          <MyTodosTable data={data.todos} />
          <Pagination count={allTodos} page={currentPage + 1} onChange={handlePageChange} />
        </StyledDesktopWrapper>
      </ThemeProvider>
    );
  }
  if (width >= BREAKPOINTS.smallTablet && width < BREAKPOINTS.tablet && isSuccess) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Pagination count={allTodos} page={currentPage + 1} onChange={handlePageChange} />
        <MyTodosSlider data={data.todos} />
      </ThemeProvider>
    );
  }
  if (width <= BREAKPOINTS.smallTablet && isSuccess) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Pagination count={allTodos} page={currentPage + 1} onChange={handlePageChange} />
        <MyTodosMobile data={data.todos} />
      </ThemeProvider>
    );
  }

  return <Box>Something went wrong</Box>;
};
