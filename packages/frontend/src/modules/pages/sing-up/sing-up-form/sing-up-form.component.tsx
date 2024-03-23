import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { INITIAL_VALUES_LOGIN, LoginSchema } from './sing-up-form-consts';
import { StyledBtn, StyledForm } from './sing-up-form.styled';
import { useRegister } from '../../../common/hooks/auth-hooks/useRegister';
import { ISignUpSchema, ISignUpSchemaReset } from '../../../common/types/user.types';
import { StyledBtnsContainer } from '../../login/login-form/login-form.styled';
import { BtnBack } from '../../../common/components/ui/btn-back/btn-back.component';
import { CustomInput } from '../../../common/components/custom-input/custom-input.component';

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
          <CustomInput
            fieldName="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={(errors.firstName && touched.firstName) as boolean | undefined}
            helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
          />
          <CustomInput
            fieldName="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={(errors.lastName && touched.lastName) as boolean | undefined}
            helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
          />
          <CustomInput
            fieldName="email"
            value={values.email}
            onChange={handleChange}
            error={(errors.email && touched.email) as boolean | undefined}
            helperText={errors.email && touched.email ? errors.email : ''}
          />
          <CustomInput
            fieldName="password"
            value={values.password}
            onChange={handleChange}
            error={(errors.password && touched.password) as boolean | undefined}
            helperText={errors.password && touched.password ? errors.password : ''}
          />
          <CustomInput
            fieldName="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={(errors.confirmPassword && touched.confirmPassword) as boolean | undefined}
            helperText={
              errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''
            }
          />
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
