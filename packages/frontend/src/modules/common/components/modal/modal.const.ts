import * as Yup from 'yup';
import { createTheme } from '@mui/material';
import { ITodoSchema } from '../../types/TodoTypes';

export const TodoSchema: Yup.ObjectSchema<ITodoSchema> = Yup.object().shape({
  title: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
  isCompleted: Yup.boolean().required('Required'),
  isPrivate: Yup.boolean().required('Required')
});

export const INITIAL_VALUES = {
  title: '',
  description: '',
  isCompleted: false,
  isPrivate: false
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});
