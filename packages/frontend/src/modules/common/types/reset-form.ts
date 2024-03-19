import { FormikHelpers } from 'formik';
import { ITodoSchema } from './TodoTypes';

export type FormikSubmit = (values: ITodoSchema, formikHelpers: FormikHelpers<ITodoSchema>) => void;
