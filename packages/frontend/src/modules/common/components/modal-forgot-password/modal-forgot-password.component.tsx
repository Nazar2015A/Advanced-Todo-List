import React, { FC } from 'react';
import { Button, Modal, TextField, ThemeProvider } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Formik, FormikHelpers } from 'formik';
import { StyledModalContent } from '../modal/modal.styled';
import { MODAL_FORGOT_INITIAL_VALUES, ForgotSchema } from './modal-forgot-password.consts';
import { StyledForm, StyledInput } from '../modal/modal-form';
import { IForgotPassword } from '../../types/reset-password.types';
import useForgotPassword from '../../hooks/mail-hooks/useForgotPassword';
import { StyledSubmitBtn } from '../modal-reset-password/modal-reset-password.styled';
import { darkTheme } from '../modal/modal.const';
import { StyledModalClose } from './modal-forgot-password.styled';
import { CustomInput } from '../custom-input/custom-input.component';

interface Props {
  open: boolean;
  close: () => void;
}

export const ModalForgotPassword: FC<Props> = ({ open, close }) => {
  const { forgotPassword } = useForgotPassword();
  const handleSubmit = (values: IForgotPassword, formikHelpers: FormikHelpers<IForgotPassword>) => {
    forgotPassword(values);
    formikHelpers.resetForm();
    close();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <StyledModalClose>
            <Button onClick={close}>
              <CloseOutlinedIcon />
            </Button>
          </StyledModalClose>
          <Formik
            initialValues={MODAL_FORGOT_INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={ForgotSchema}
          >
            {({ errors, touched, values, handleChange }) => (
              <StyledForm>
                <CustomInput
                  fieldName="email"
                  value={values.email}
                  onChange={handleChange}
                  error={(errors.email && touched.email) as boolean | undefined}
                  helperText={errors.email && touched.email ? errors.email : ''}
                />
                <StyledSubmitBtn variant="contained" type="submit">
                  Submit
                </StyledSubmitBtn>
              </StyledForm>
            )}
          </Formik>
        </StyledModalContent>
      </Modal>
    </ThemeProvider>
  );
};
