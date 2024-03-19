import React from 'react';
import { useParams } from 'react-router-dom';
import { ModalResetPassword } from '../../common/components/modal-reset-password';

export const ResetPasswordPage = () => {
  const { token } = useParams<string>();
  return (
    <div>
      <ModalResetPassword token={token!} />
    </div>
  );
};
