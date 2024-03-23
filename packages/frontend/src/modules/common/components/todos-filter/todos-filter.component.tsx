import React, { FC } from 'react';
import { StyledFilterBtns } from './todos-filter.styled';

interface Props {
  filter: string;
  activeFilter: string;
  handleFilterClick: (filter: string) => void;
}

export const TodosFilter: FC<Props> = ({ filter, activeFilter, handleFilterClick }) => {
  const handleFilter = () => {
    handleFilterClick(filter);
  };
  return (
    <StyledFilterBtns onClick={handleFilter} $active={activeFilter === filter}>
      {filter}
    </StyledFilterBtns>
  );
};
