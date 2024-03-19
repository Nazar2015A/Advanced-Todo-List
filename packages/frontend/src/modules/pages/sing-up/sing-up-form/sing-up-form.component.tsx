import React from 'react';
import { TextField } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import { INITIAL_VALUES_LOGIN, LoginSchema } from './sing-up-form-consts';
import { StyledBtn, StyledForm, StyledInput } from './sing-up-form.styled';
import { useRegister } from '../../../common/hooks/auth-hooks/useRegister';
import { ISignUpSchema, ISignUpSchemaReset } from '../../../common/types/user.types';
import { StyledBtnsContainer } from '../../login/login-form/login-form.styled';
import { BtnBack } from '../../../common/components/ui/btn-back/btn-back.component';

export const SignUpForm = () => {
  const { userRegister } = useRegister();

  const onSubmit = (values: ISignUpSchema, formikHelpers: FormikHelpers<ISignUpSchemaReset>) => {
    const { confirmPassword, ...valuesWithoutConfirmPassword } = values;
    userRegister(valuesWithoutConfirmPassword);
    formikHelpers.resetForm();
  };
  return (
    <Formik initialValues={INITIAL_VALUES_LOGIN} validationSchema={LoginSchema} onSubmit={onSubmit}>
      {({ errors, touched, values, handleChange }) => (
        <StyledForm>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="firstName">First Name</label>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              error={(errors.firstName && touched.firstName) as boolean | undefined}
              helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
            />
          </StyledInput>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lastName">Last Name</label>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              error={(errors.lastName && touched.lastName) as boolean | undefined}
              helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
            />
          </StyledInput>
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
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lastName">Confirm Password</label>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="ConfirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={(errors.confirmPassword && touched.confirmPassword) as boolean | undefined}
              helperText={
                errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''
              }
            />
          </StyledInput>
          <StyledBtnsContainer>
            <BtnBack />
            <StyledBtn type="submit" fullWidth variant="contained">
              Sign Up
            </StyledBtn>
          </StyledBtnsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};
