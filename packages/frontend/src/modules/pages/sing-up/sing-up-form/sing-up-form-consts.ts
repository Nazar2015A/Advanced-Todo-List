import * as Yup from 'yup';
import { ILoginSchema } from '../../../common/types/user.types';

export const INITIAL_VALUES_LOGIN = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const LoginSchema: Yup.ObjectSchema<ILoginSchema> = Yup.object().shape({
  firstName: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
  email: Yup.string().required('Required').email('Email must be a valid'),
  password: Yup.string().min(5).required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .min(5)
    .oneOf([Yup.ref('password')], 'Your password should match')
});
