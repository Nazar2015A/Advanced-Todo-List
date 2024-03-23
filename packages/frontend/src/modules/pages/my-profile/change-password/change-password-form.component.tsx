import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Button, ThemeProvider } from '@mui/material';
import {
  CHNAGE_PASWWORD_INITIAL_VALUES,
  ChangePasswordSchema,
  IChangePassword
} from './change-password-form.consts';
import { darkTheme } from '../../../common/components/modal';
import { useChangePassword } from '../../../common/hooks/user-hooks/useChangePassword';
import { StyledForm, StyledInputContainer } from './change-password-form.styled';
import { CustomInput } from '../../../common/components/custom-input/custom-input.component';

export const ChangePasswordForm = () => {
  const { changePassword } = useChangePassword();

  const handleSubmit = (values: IChangePassword, formikHelpers: FormikHelpers<IChangePassword>) => {
    changePassword(values);
    formikHelpers.resetForm();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Formik
        initialValues={CHNAGE_PASWWORD_INITIAL_VALUES}
        validationSchema={ChangePasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <StyledForm>
            <StyledInputContainer>
              <CustomInput
                fieldName="old-password"
                value={values.oldPassword}
                onChange={handleChange}
                error={(errors.oldPassword && touched.oldPassword) as boolean | undefined}
                helperText={errors.oldPassword && touched.oldPassword ? errors.oldPassword : ''}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <CustomInput
                fieldName="new-password"
                value={values.newPassword}
                onChange={handleChange}
                error={(errors.newPassword && touched.newPassword) as boolean | undefined}
                helperText={errors.newPassword && touched.newPassword ? errors.newPassword : ''}
              />
            </StyledInputContainer>

            <Button type="submit">Change Password</Button>
          </StyledForm>
        )}
      </Formik>
    </ThemeProvider>
  );
};
