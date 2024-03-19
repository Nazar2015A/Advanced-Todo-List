import * as Yup from 'yup';
import { IRestorePassword } from '../../types/reset-password.types';

export const MODAL_RESTORE_INITIAL_VALUES = {
  password: ''
};

export const RestoreSchema: Yup.ObjectSchema<IRestorePassword> = Yup.object().shape({
  password: Yup.string().required('Required').min(5)
});
