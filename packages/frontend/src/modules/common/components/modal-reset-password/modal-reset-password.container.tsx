import React, { FC, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Button, Modal, ThemeProvider } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IRestorePassword } from '../../types/reset-password.types';
import { StyledModalContent } from '../modal/modal.styled';
import { StyledForm } from '../modal/modal-form';
import { MODAL_RESTORE_INITIAL_VALUES, RestoreSchema } from './modal-forgot-password.consts';
import useRestorePassword from '../../hooks/mail-hooks/useResetPassword';
import { darkTheme } from '../modal/modal.const';
import { StyledSubmitBtn } from './modal-reset-password.styled';
import { StyledModalClose } from '../modal-forgot-password/modal-forgot-password.styled';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { APP_KEYS } from '../../consts';
import { CustomInput } from '../custom-input/custom-input.component';
import { useModal } from '../../hooks/useModal';

interface Props {
  token: string;
}

export const ModalResetPassword: FC<Props> = ({ token }) => {
  const { modal, closeModal } = useModal(true);

  const { navigate } = useMyNavigation(APP_KEYS.ROUTER_KEYS.HOME);

  const { restorePassword } = useRestorePassword();

  const handleModalClose = () => {
    closeModal();
    navigate();
  };
  const handleSubmit = (
    values: IRestorePassword,
    formikHelpers: FormikHelpers<IRestorePassword>
  ) => {
    restorePassword({ ...values, token });
    formikHelpers.resetForm();
    handleModalClose();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <StyledModalClose>
            <Button onClick={handleModalClose}>
              <CloseOutlinedIcon />
            </Button>
          </StyledModalClose>
          <Formik
            initialValues={MODAL_RESTORE_INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={RestoreSchema}
          >
            {({ errors, touched, values, handleChange }) => (
              <StyledForm>
                <CustomInput
                  fieldName="password"
                  value={values.password}
                  onChange={handleChange}
                  error={(errors.password && touched.password) as boolean | undefined}
                  helperText={errors.password && touched.password ? errors.password : ''}
                />
                <StyledSubmitBtn variant="contained" type="submit">
                  Change Password
                </StyledSubmitBtn>
              </StyledForm>
            )}
          </Formik>
        </StyledModalContent>
      </Modal>
    </ThemeProvider>
  );
};
