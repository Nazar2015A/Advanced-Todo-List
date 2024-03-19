import * as Yup from 'yup';
import { IForgotPassword } from '../../types/reset-password.types';

export const MODAL_FORGOT_INITIAL_VALUES = {
  email: ''
};

export const ForgotSchema: Yup.ObjectSchema<IForgotPassword> = Yup.object().shape({
  email: Yup.string().required('Required').email()
});
