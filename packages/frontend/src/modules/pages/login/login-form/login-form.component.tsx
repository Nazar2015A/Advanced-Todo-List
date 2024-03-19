import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { TextField } from '@mui/material';
import { INITIAL_VALUES_LOGIN, LoginSchema } from './login-form-consts';
import { StyledBtn, StyledBtnsContainer, StyledForm, StyledInput } from './login-form.styled';
import { useLogin } from '../../../common/hooks/auth-hooks/useLogin';
import { ILoginSchema } from '../../../common/types/user.types';
import { BtnBack } from '../../../common/components/ui/btn-back/btn-back.component';

export const LoginForm = () => {
  const { userLogin } = useLogin();
  const onSubmit = (values: ILoginSchema, formikHelpers: FormikHelpers<ILoginSchema>) => {
    userLogin(values);
    formikHelpers.resetForm();
  };
  return (
    <Formik initialValues={INITIAL_VALUES_LOGIN} validationSchema={LoginSchema} onSubmit={onSubmit}>
      {({ errors, touched, values, handleChange }) => (
        <StyledForm>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email">Email</label>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={(errors.email && touched.email) as boolean | undefined}
              helperText={errors.email && touched.email ? errors.email : ''}
            />
          </StyledInput>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lastName">Password</label>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={(errors.password && touched.password) as boolean | undefined}
              helperText={errors.password && touched.password ? errors.password : ''}
            />
          </StyledInput>
          <StyledBtnsContainer>
            <BtnBack />
            <StyledBtn type="submit" fullWidth variant="contained">
              Sign In
            </StyledBtn>
          </StyledBtnsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};
