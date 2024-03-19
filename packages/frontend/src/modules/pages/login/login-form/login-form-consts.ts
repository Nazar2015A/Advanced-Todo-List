import * as Yup from 'yup';
import { ILoginSchema } from '../../../common/types/user.types';

export const INITIAL_VALUES_LOGIN = {
  email: '',
  password: ''
};

export const LoginSchema: Yup.ObjectSchema<ILoginSchema> = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  password: Yup.string().required('Required')
});
