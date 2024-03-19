import * as Yup from 'yup';

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export const CHNAGE_PASWWORD_INITIAL_VALUES = {
  oldPassword: '',
  newPassword: ''
};

export const ChangePasswordSchema: Yup.ObjectSchema<IChangePassword> = Yup.object().shape({
  oldPassword: Yup.string().required('Required').min(5),
  newPassword: Yup.string().required('Required').min(5)
});
