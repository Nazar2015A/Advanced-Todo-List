import { useSearchParams } from 'react-router-dom';

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: '', status: '' });
  const getSearch = searchParams.get('search');
  const getStatus = searchParams.get('status');
  const setSearch = (value: string) => {
    setSearchParams((prev) => {
      prev.set('search', value);
      return prev;
    });
  };
  const setStatus = (value: string) => {
    setSearchParams((prev) => {
      prev.set('status', value);
      return prev;
    });
  };

  return {
    searchParams,
    setSearch,
    setStatus,
    getSearch,
    getStatus
  };
};
